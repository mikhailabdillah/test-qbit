import { useAppDispatch } from '@/store'
import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Switch,
  Textarea,
} from '@chakra-ui/react'
import { Form, Formik } from 'formik'

const PostingForm = () => {
  const dispatch = useAppDispatch()

  const initialValues = {
    status: 0,
    title: '',
    content: '',
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        if (values.title) {
          const post = {
            ...values,
            id: 'asd',
          }
          dispatch({ type: 'posting/addPost', payload: post })
        }
      }}
    >
      {({ values, handleChange, handleSubmit, setFieldValue }) => (
        <Form>
          <Container py={10}>
            <FormControl mb={6}>
              <Input
                type="text"
                value={values.title}
                onChange={handleChange('title')}
                placeholder="Post Title"
              />
            </FormControl>
            <FormControl mb={6}>
              <Textarea
                rows={8}
                value={values.content}
                onChange={handleChange('content')}
                placeholder="Post Content"
              />
            </FormControl>
            <FormControl display="flex" alignItems="center" mb={6}>
              <FormLabel htmlFor="post-status" mb="0">
                Publish the post?
              </FormLabel>
              <Switch
                isChecked={Boolean(values.status)}
                onChange={() =>
                  setFieldValue('status', values.status === 1 ? 0 : 1)
                }
                mb={0}
                id="post-status"
              />
              <FormLabel ml={2} mb={0}>
                or save to draft
              </FormLabel>
            </FormControl>
            <Button type="submit" onClick={() => handleSubmit()}>
              Submit
            </Button>
          </Container>
        </Form>
      )}
    </Formik>
  )
}

export default PostingForm
