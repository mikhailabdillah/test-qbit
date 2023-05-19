import { RootState, useAppDispatch } from '@/store'
import { PostingState } from '@/store/features/post.slice'
import { Checkbox, Text } from '@chakra-ui/react'
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
  const dispatch = useAppDispatch()
  const firstPageRows = rows.slice(0, 20)

  return (
    <>
      <table className="table" {...getTableProps()}>
        <colgroup>
          <col style={{ width: '5%' }} />
          <col style={{ width: '20%' }} />
        </colgroup>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              <th>Update</th>
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
            const data = row.original as PostingState
            return (
              <tr {...row.getRowProps()}>
                <td>
                  <Checkbox
                    isChecked={Boolean(data.status)}
                    onChange={() => {
                      console.log('click', data)
                      dispatch({
                        type: 'posting/updateStatus',
                        payload: data.id,
                      })
                    }}
                  />
                </td>
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
  const posts = useSelector((state: RootState) => state.posting)

  const data = React.useMemo(() => posts, [posts])

  const columns: Column[] = React.useMemo(
    () => [
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
      {Boolean(posts.length) && <Table columns={columns} data={data} />}
      {!posts.length && <Text>No posts</Text>}
    </>
  )
}

export default PostsTable
