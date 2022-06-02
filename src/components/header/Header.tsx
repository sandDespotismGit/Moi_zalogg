import { Box, Button, HStack, Icon, Image, Link, VStack, Text } from '@chakra-ui/react';
import React from 'react';
import { CgPhone } from 'react-icons/cg';
import { FaTelegram } from 'react-icons/fa';

import mainpage_logo from '../../assets/mainpage_logo.svg';

export const Header = React.memo(() => {
    return (
        <HStack w='full' justify='space-between' zIndex={1}>
            <Box>
                <Image
                    src={mainpage_logo}
                    alt="мойзалог.рф"
                    loading="lazy"
                    w="90%"
                    h="90%"
                    htmlWidth="full"
                    htmlHeight="full"
                />
            </Box>
            <HStack spacing='30px'>
                <HStack spacing='25px'>
                    <Link href='https://chakra-ui.com/docs/components/navigation/link'>
                    <Icon as={FaTelegram} w='32px' h='32px' color='brand.bluelight' />
                    </Link>
                    <Icon as={CgPhone} w='32px' h='32px' color='brand.bluelight' />
                    <VStack align='start'>
                        <Link fontWeight='800' href='#'> 8 (888) 888-88-88 </Link>
                        <Text color='brand.black50'>с 9.00 до 21.00</Text>
                    </VStack>
                </HStack>
                <Button size='md' variant='brand-blue'>Хочу стать брокером</Button>
            </HStack>
        </HStack>
    );
});