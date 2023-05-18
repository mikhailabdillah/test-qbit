import { Button, Container, FormControl, Input } from '@chakra-ui/react'
import { Formik, Form } from 'formik'
import { useAppDispatch } from '@/store'
import { redirect } from 'react-router-dom'

const LoginForm = () => {
  const dispatch = useAppDispatch()
  return (
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
        throw new Error('Failed to login, Please check username & password!')
      }}
    >
      {({ values, handleChange, handleSubmit }) => (
        <Form>
          <Container maxW={'xl'} py={10}>
            <FormControl mb={6}>
              <Input
                type="text"
                value={values.username}
                onChange={handleChange('username')}
                placeholder="Username"
              />
            </FormControl>
            <FormControl mb={6}>
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
  )
}

export default LoginForm
