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
      px: [12, 14],
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
    'brand-border-blue': {
      color: 'brand.bluelight',
      bg: 'transparent',
      border: '2px',
      borderColor: 'brand.bluelight',
      _hover: {
        bg: 'brand.blue50',
        color: 'brand.white',
        borderColor: 'brand.white'
      },
    },
    'brand-blue': {
      color: 'brand.white',
      bg: 'brand.bluelight',
      border: '2px',
      borderColor: 'brand.bluelight',
      _hover: {
        bg: 'transparent',
        border: '2px',
        borderColor: 'brand.bluelighr',
        color: 'brand.bluelight',
      },
    },
    'brand-transparent': {
      color: 'brand.gray.umber',
      bg: 'transparent',
      _hover: {
        bg: 'brand.gray.smoky',
      },
    },
  },
    link: {
      color: 'brand.gray.umber',
    },
    defaultProps: {
      size: 'sm',
      variant: 'brand-transparent',
    },
  };
