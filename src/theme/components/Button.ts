import { ThemeComponents } from '@chakra-ui/react'

const Button: ThemeComponents['Button'] = {
  baseStyle: {},
  variants: {
    primary: {
      bgColor: 'primary',
      color: 'white',
      boxShadow: 'none',
      borderRadius: 0,
      transition: 'all 0.5s ease',
      fontWeight: 'normal',
      borderWidth: 1,
      borderColor: 'primary',
      borderStyle: 'solid',
      _hover: {
        bgColor: 'white',
        color: 'black',
        boxShadow: '2xl',
        transition: 'all 0.5s ease',
        borderColor: 'white',
        '& img': {
          filter: 'invert()',
        },
      },
      _focusVisible: {
        boxShadow: 'none',
        outline: 'none',
      },
    },
    secondary: {
      background: 'transparent',
      borderWidth: 1,
      borderColor: 'black',
      borderStyle: 'solid',
      borderRadius: 0,
      boxShadow: 'none',
      color: 'black',
      fontWeight: 'normal',
      transition: 'all 0.5s ease',
      _hover: {
        background: 'black',
        color: 'white',
        transition: 'all 0.5s ease',
      },
      _focusVisible: {
        boxShadow: 'none',
        outline: 'none',
      },
    },
  },
  defaultProps: {
    variant: 'primary',
  },
}

export default Button
