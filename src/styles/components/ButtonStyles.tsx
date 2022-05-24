export const ButtonStyles = {
  baseStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0px',
    _focus: {
      shadow: 'none',
    },
    _hover: {
      WebkitTapHighlightColor: 'transparent',
    },
  },
  sizes: {
    xs: {
      fontSize: ['xs'],
      px: [2, 3, 4, 5],
      py: 4,
    },
    sm: {
      fontSize: ['xs', 'sm'],
      px: [6, 7, 8, 9, 10, 12],
      py: 5,
    },
    md: {
      fontSize: ['sm', 'md'],
      px: [6, 7],
      py: 6,
    },
    link: {
      p: 0,
      fontSize: ['xs'],
      fontWeight: 'normal',
    },
    allIn: {
      fontSize: ['xs'],
      px: [2, 3],
      py: 4,
    },
  },
  variants: {
    'brand-transparent': {
      color: 'brand.gray.umber',
      bg: 'transparent',
      _hover: {
        bg: 'brand.gray.smoky',
      },
    },
    'brand-purple-border': {
      border: '2px',
      color: 'brand.purpleLight',
      _hover: {
        bg: 'brand.purpleGradinetLight',
      },
    },
    'brand-purple': {
      backgroundColor: 'brand.purple',
      color: 'white',
      fontSize: 'lg',
      h: '50px',
      _hover: {
        backgroundColor: 'brand.pink',
        color: 'brand.purple',
      },
    },
    'brand-transparent-purple-border': {
      variant: 'brand-transparent',
      borderColor: 'brand.purpleLight',
      px: '0px',
      _hover: {
        border: '2px',
        borderColor: 'brand.purpleLight',
      },
      _active: {
        border: '2px',
        borderColor: 'brand.purpleLight',
      },
    },
    link: {
      color: 'brand.gray.umber',
    },
  },
  defaultProps: {
    size: 'sm',
    variant: 'brand-transparent',
  },
};
