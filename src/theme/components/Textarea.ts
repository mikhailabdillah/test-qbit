import { ThemeComponents } from '@chakra-ui/react'

const Textarea: ThemeComponents['Textarea'] = {
  baseStyle: {},
  variants: {
    primary: {
      borderRadius: 'sm',
      bg: 'transparent',
      borderColor: 'black',
      borderWidth: 1,
      py: 3,
      _invalid: {
        borderColor: 'red.400',
      },
      _placeholder: {
        color: 'gray.500',
        opacity: 0.7,
      },
    },
  },
  defaultProps: {
    variant: 'primary',
  },
}

export default Textarea
