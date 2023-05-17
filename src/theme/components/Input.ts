import { ThemeComponents } from '@chakra-ui/react'

const Input: ThemeComponents['Input'] = {
  baseStyle: {},
  variants: {
    primary: {
      field: {
        borderRadius: 'sm',
        bg: 'transparent',
        borderColor: 'black',
        borderWidth: 1,
        py: 6,
        _invalid: {
          borderColor: 'red.400',
        },
        _placeholder: {
          color: 'gray.300',
          opacity: 0.7,
        },
      },
    },
  },
  defaultProps: {
    variant: 'primary',
  },
}

export default Input
