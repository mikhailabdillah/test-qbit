import PostingForm from '@/components/Form/Posting'
import Layout from '@/components/Layout/Layout'
import { PostsTable } from '@/components/Post'
import ProtectedRoute from '@/utils/ProtectedRoutes'
import { Box, Container, Heading } from '@chakra-ui/react'

const PostingPage = () => {
  return (
    <ProtectedRoute>
      <Layout>
        <Box pt={20}>
          <Heading as="h1" size="4xl" textAlign={'center'}>
            Posting
          </Heading>
          <PostingForm />
        </Box>

        <Container py={20} maxW={'7xl'}>
          <PostsTable />
        </Container>
      </Layout>
    </ProtectedRoute>
  )
}
export default PostingPage
