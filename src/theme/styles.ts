import { Styles } from '@chakra-ui/theme-tools'

const styles: Styles = {
  global: () => ({
    html: {
      scrollBehavior: 'smooth',
      body: {
        bg: 'white',
      },
      a: {
        _hover: {
          color: 'primary',
        },
      },
    },
  }),
}

export default styles
