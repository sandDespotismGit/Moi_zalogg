import { Box, Button, HStack, Image } from '@chakra-ui/react';
import React from 'react';

import mainpage_logo from '../../assets/mainpage_logo.svg';

export const Header = React.memo(() => {
    return (
        <HStack w='full' justify='space-between'>
            <Box>
                <Image
                    src={mainpage_logo}
                    alt="мойзалог.рф"
                    loading="lazy"
                    w="full"
                    h="full"
                    htmlWidth="full"
                    htmlHeight="full"
                />
            </Box>
            <HStack spacing='30px'>
                <Button size='md' variant='brand-border-orange'>Хочу стать брокером</Button>
                <Button size='md' variant='brand-orange'>Войти</Button>
            </HStack>
        </HStack>
    );
});