import { extendTheme } from '@chakra-ui/react';

import { TextStyles as Text } from './components/TextStyles';
import { HeadingStyles as Heading } from './components/HeadingStyles';
import { LinkStyles as Link } from './components/LinkStyles';
import { ButtonStyles as Button } from './components/ButtonStyles';
import { ImageStyles as Image } from './components/ImageStyles';
import { PopoverStyles as Popover } from './components/PopoverStyles';
import { ModalStyles as Modal } from './components/ModalStyles';
import { FormStyles as Form } from './components/FormStyles';
import { FormLabelStyles as FormLabel } from './components/FormLabelStyles';
import { FormErrorStyles as FormError } from './components/FormErrorStyles';
import { InputStyles as Input } from './components/InputStyles';
import { NumberInputStyles as NumberInput } from './components/NumberInputStyles';
import { PinInputStyles as PinInput } from './components/PinInputStyles';
import { TextareaStyles as Textarea } from './components/TextareaStyles';
import { SelectStyles as Select } from './components/SelectStyles';
import { TooltipStyles as Tooltip } from './components/TooltipStyles';
import { TagStyles as Tag } from './components/TagStyles';
import { MenuStyles as Menu } from './components/MenuStyles';
import { SkeletonStyles as Skeleton } from './components/SkeletonStyles';
import { TableStyles as Table } from './components/TableStyles';

export const theme = extendTheme({
  initialColorMode: 'dark',
  useSystemColorMode: false,
  fonts: {
    heading: 'Montserrat',
    body: 'Montserrat',
  },
  colors: {
    brand: {
      beige: '#F3E9D2',
      orange: '#F96F5D',
      black: '#13262F',
      orange50: 'rgba(249, 111, 93, 0.5)',
    },
  },
  styles: {
    global: {
      body: {
        color: 'white',
        'font-feature-settings': "'pnum' on, 'lnum' on;",
      },
    },
  },
  layerStyles: {
    'brand-purple-gradient': {
      bgGradient: 'linear(to-t, brand.darkPurple 1%, brand.black)',
    },
  },
  components: {
    Text,
    Heading,
    Link,
    Button,
    Image,
    Popover,
    Modal,
    Form,
    FormLabel,
    FormError,
    Input,
    NumberInput,
    PinInput,
    Textarea,
    Select,
    Tooltip,
    Tag,
    Menu,
    Skeleton,
    Table,
  },
});
