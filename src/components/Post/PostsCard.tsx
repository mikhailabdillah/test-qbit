import { RootState } from '@/store'
import { PostingState } from '@/store/features/post.slice'
import { Box, Container, Grid, GridItem, Heading, Text } from '@chakra-ui/react'
import { useSelector } from 'react-redux'

const selectPublishPosts = (state: RootState) =>
  state.posting.filter((post) => post.status === 1)

const Card = ({ post }: { post: PostingState }) => {
  return (
    <Box
      bgColor={'white'}
      transition={'box-shadow .3s ease-in-out'}
      boxShadow={'0 4px 30px rgba(140, 152, 164, 0.2)'}
      _hover={{
        boxShadow: '0 4px 30px rgba(140, 152, 164, 0.4)',
      }}
    >
      <Box p={6}>
        <Heading as={'h2'} size={'lg'} color="primary">
          {post.title}
        </Heading>
        <Text
          color="#6c727c"
          textOverflow="ellipsis"
          sx={{
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {post.content.slice(0, 100)}
        </Text>
      </Box>
    </Box>
  )
}

const PostCard = () => {
  const posts = useSelector(selectPublishPosts)

  if (!posts.length) {
    return null
  }

  return (
    <>
      <Container as={'section'} maxW={'7xl'} py={20}>
        <Heading as={'h2'} size={'4xl'} textAlign={'center'} mb={10}>
          Recent Posts
        </Heading>
        <Grid
          gridGap={[4, 6, 8]}
          gridTemplateColumns={'repeat(12,[col] 1fr)'}
          mb={10}
        >
          {posts.map((p) => (
            <GridItem
              gridColumn={['1/-1', 'span 6/span 6', 'span 4/span 4']}
              key={p.id}
            >
              <Card post={p} />
            </GridItem>
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default PostCard
