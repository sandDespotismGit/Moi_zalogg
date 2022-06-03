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
    'brand-form': {
      field: {
        borderRadius: '0px',
        border: '1px',
        borderColor: 'brand.bluelight',
        fontSize: 'sm',
        placeholder: 'brand.bluelight',
        color: 'brand.bluelight',
        bg: 'transparent',
        _focus: {
          boxShadow: 'inner',
        },
      },
    },
  },
};
