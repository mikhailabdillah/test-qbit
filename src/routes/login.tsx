import { LoginForm } from '@/components/Form'
import Layout from '@/components/Layout/Layout'
import { RootState } from '@/store'
import { Box, Heading } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const LoginPage = () => {
  const user = useSelector((state: RootState) => state.auth.user)
  if (user.isLogged) {
    return <Navigate to={'/'} replace />
  }

  return (
    <Layout>
      <Box py={20}>
        <Heading as={'h1'} size={'4xl'} textAlign={'center'}>
          Login
        </Heading>
        <LoginForm />
      </Box>
    </Layout>
  )
}

export default LoginPage
