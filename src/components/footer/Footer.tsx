import { Box, Button, HStack, Image, Link } from '@chakra-ui/react';
import React from 'react';

import mainpage_logo from '../../assets/mainpage_logo.svg';

export const Footer = React.memo(() => {
    return (
        <HStack w='full' justify='space-between' paddingTop='25px'>
            <HStack>
                <Box paddingRight='30px'>
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
                <Button size='md' variant='brand-border-orange'>Хочу стать брокером</Button>
            </HStack>
            <HStack spacing='50px'>
                <Link>Подобрать продукт</Link>
                <Link>Часто задавамые вопросы</Link>
                <Link>Отзывы</Link>
                <Link fontWeight='800'>Задать вопрос</Link>
            </HStack>
        </HStack>
    );
});