import { Box, HStack, Icon, Image, VStack, Text, Link } from '@chakra-ui/react';
import React from 'react';
import { CgPhone } from 'react-icons/cg';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { IoLogoVk } from 'react-icons/io';

import mainpage_logo from '../../assets/mainpage_logo.svg';

export const Footer = React.memo(() => {
    const ph = ['7px', '15px','30px','45px']
    const pw = ['20px', '40px','60px','80px']
    return (
        <HStack w='full' justify='space-between' paddingTop='45px' align="top" px={pw} py={ph}>
            <Box paddingRight='250px'>
                <Image
                    src={mainpage_logo}
                    alt="мойзалог.рф"
                    loading="lazy"
                    htmlWidth="full"
                    htmlHeight="full"
                />
            </Box>
            <HStack justify='space-between' w='full' align='top'>
                <VStack align='start'>
                    <HStack spacing='25px'>
                        <Icon as={CgPhone} w='32px' h='32px' color='brand.bluelight' />
                        <VStack align='start'>
                            <Link fontWeight='800' href='#'> 8 (888) 888-88-88 </Link>
                            <Text color='brand.black50'>с 9.00 до 21.00</Text>
                        </VStack>
                    </HStack>
                    <HStack spacing='25px'>
                        <Icon as={AiOutlineMail} w='32px' h='32px' color='brand.bluelight' />
                        <Link fontWeight='800' href='#'> moizalog@support.ru </Link>
                    </HStack>
                </VStack>
                <VStack align='start'>
                    <Link href='#'>Сотрудничество</Link>
                    <Link href='#'>Вложить деньги</Link>
                    <Link href='#'>Кредиторам</Link>
                </VStack>
                <VStack align='start'>
                    <Text color="brand.black80">Мы в соцсетях</Text>
                    <HStack spacing='25px'>
                        <Link href='https://chakra-ui.com'>
                        <Icon as={BsFacebook} w='32px' h='32px' color='brand.black' />
                        </Link>
                        <Link>
                        <Icon as={IoLogoVk} w='32px' h='32px' color='brand.black' />
                        </Link>
                    </HStack>
                </VStack>
            </HStack>
        </HStack>
    );
});