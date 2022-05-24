import { inputAnatomy as parts } from '@chakra-ui/anatomy';

export const InputStyles = {
  parts: parts.keys,

  sizes: {
    sm: {
      fontSize: 'sm',
    },
    xs: {
      fontSize: 'xs',
    },
  },
  variants: {
    'brand-support': {
      field: {
        borderRadius: '0px',
        fontSize: 'sm',
        color: 'brand.gray.dark',
        bg: 'rgba(83, 55, 144, 0.4)',
        _focus: {
          boxShadow: 'inner',
        },
      },
    },
  },
};
