import { RootState } from '@/store'
import { PostingState } from '@/store/features/post.slice'
import { Text } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { useTable, useSortBy, Column } from 'react-table'

const Table = ({
  columns,
  data,
}: {
  columns: Column[]
  data: PostingState[]
}) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy)

  const firstPageRows = rows.slice(0, 20)

  return (
    <>
      <table className="table" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                // Add the sorting props to control sorting. For this example
                // we can add them into the header props
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  {/* Add a sort direction indicator */}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {firstPageRows.map((row) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      <br />
      <div>Showing the first 20 results of {rows.length} rows</div>
    </>
  )
}

const PostsTable = () => {
  const post = useSelector((state: RootState) => state.posting.post)

  const data = React.useMemo(() => post, [post])

  const columns: Column[] = React.useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'Title',
        accessor: 'title',
      },
      {
        Header: 'Status',
        accessor: 'status',
      },
      {
        Header: 'Content',
        accessor: 'content',
      },
    ],
    []
  )

  return (
    <>
      {Boolean(post.length) && <Table columns={columns} data={data} />}
      {!post.length && <Text>No posts</Text>}
    </>
  )
}

export default PostsTable
