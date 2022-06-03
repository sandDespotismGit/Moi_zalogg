import { selectAnatomy as parts } from '@chakra-ui/anatomy';

export const SelectStyles = {
  parts: parts.keys,
  baseStyle: {
    borderRadius: '0px',
  },
  sizes: {},
  variants: {
    'brand-table': {
      field: {
        borderRadius: '0px',
        fontSize: 'xs',
        color: 'brand.gray.dark',
        bg: 'brand.gray.smoky',
        _focus: {
          shadow: 'none',
        },
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
              shadow: 'none',
            },
          },
        },
      },
      defaultProps: {},
    },
  },
};
