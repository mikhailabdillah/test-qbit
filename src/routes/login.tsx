import Layout from '@/components/Layout/Layout'
import { RootState, useAppDispatch } from '@/store'
import {
  Box,
  Button,
  Container,
  FormControl,
  Heading,
  Input,
} from '@chakra-ui/react'
import { Formik, Form } from 'formik'
import { useSelector } from 'react-redux'
import { Navigate, redirect } from 'react-router-dom'

const LoginPage = () => {
  const user = useSelector((state: RootState) => state.auth.user)
  const dispatch = useAppDispatch()
  if (user.isLogged) {
    return <Navigate to={'/'} replace />
  }

  return (
    <Layout>
      <Box py={20}>
        <Heading as={'h1'} size={'4xl'} textAlign={'center'}>
          Login
        </Heading>
        <Formik
          initialValues={{
            username: '',
            password: '',
          }}
          onSubmit={(values) => {
            if (values.username === 'admin' && values.password === 'qbit123') {
              console.log(values)
              dispatch({
                type: 'auth/setAuth',
                payload: { isLogged: true, token: '' },
              })
              redirect('/')
            }
            throw new Error(
              'Failed to login, Please check username & password!'
            )
          }}
        >
          {({ values, handleChange, handleSubmit }) => (
            <Form>
              <Container maxW={'xl'} py={10}>
                <FormControl mb={4}>
                  <Input
                    type="text"
                    value={values.username}
                    onChange={handleChange('username')}
                    placeholder="Username"
                  />
                </FormControl>
                <FormControl mb={4}>
                  <Input
                    type="password"
                    value={values.password}
                    onChange={handleChange('password')}
                    placeholder="Password"
                  />
                </FormControl>
                <FormControl>
                  <Button type="submit" onClick={() => handleSubmit()}>
                    Sign In
                  </Button>
                </FormControl>
              </Container>
            </Form>
          )}
        </Formik>
      </Box>
    </Layout>
  )
}

export default LoginPage
