import { Box, VStack, Image, HStack, Text, Heading, Icon, Square, Spacer } from '@chakra-ui/react';
import React from 'react';
import { CgNotes } from 'react-icons/cg'
import { MdFilterList } from 'react-icons/md'
import { AiOutlineDatabase } from 'react-icons/ai'

import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { Header } from '../../components/header/Header';
import { Block } from '../../components/block/Block';
import { Footer } from '../../components/footer/Footer';
import main_image from '../../assets/mainimage.png';
// import Money from '../../assets/money.png';


export const Main = React.memo(() => {
  const { height } = useWindowDimensions();
  return (
    <VStack minH={`${height}px`} py="45px" px="80px" backgroundColor="brand.beige" >
      <Header />
      <Spacer />
      <HStack w='full'>
        <Box position='absolute' right='20px' bottom='0px'>
          <Image
            src={main_image}
            alt="мойзалог.рф"
            loading="lazy"
            w="full"
            h="full"
            htmlWidth="full"
            htmlHeight="full"
          />
        </Box>
      </HStack>
      <HStack w='full' h='350px' justify='space-between' align='center' zIndex={1} paddingTop='70px'>
        <VStack align='start'>
          <HStack>
            <Heading maxW='600px' fontSize={['20px', '40px']}> ДЕНЬГИ ДЛЯ </Heading>
            <Heading color='brand.orange' fontSize={['20px', '40px']}>БИЗНЕСА</Heading>
          </HStack>
          <Heading maxW='600px' fontSize={['20px', '40px']} paddingBottom='20px'>ПОД ЗАЛОГ ИМУЩЕСТВА</Heading>
          <Text fontSize='18px' maxW='400px'>Поможем Вам найти лучшее предложение на рынке</Text>
        </VStack>
      </HStack>
      <HStack w='full' justify='space-between' zIndex={10} py="50px">
        <Block firstWord='ПОДБОР ПРОДУКТА СРЕДИ ТЫСЯЧИ ПРЕДЛОЖЕНИЙ' icon={<Square size='50px'><Icon as={CgNotes} color='brand.orange' boxSize='100%' /></Square>} />
        <Block firstWord='СОРТИРОВКА И УЧЕТ ВСЕХ ПАРАМЕТРОВ ПАРАМЕТРОВ' icon={<Square size='50px'><Icon as={MdFilterList} color='brand.orange' boxSize='100%' /></Square>} />
        <Block firstWord='БАЗА ОТЗЫВОВ И РЕЦЕНЗИЙ' icon={<Square size='50px'><Icon as={AiOutlineDatabase} color='brand.orange' boxSize='100%' /></Square>} />
      </HStack>
      {/* <VStack w='full' paddingTop='80px'>
        <HStack w='full' justify='space-between'>
          <Box paddingRight='30px'>
            <Image
              src={Money}
              alt="мойзалог.рф"
              loading="lazy"
              w="full"
              h="full"
              htmlWidth="full"
              htmlHeight="full"
            />
          </Box>
          <VStack align='end' spacing='20px'>
            <Text fontSize='18px' fontWeight='800' color='brand.black'>ОСТАЛИСЬ ВОПРОСЫ?</Text>
            <Text fontSize='16px' fontWeight='600' align='end' w='400px' color='brand.black'>Напишите нам и мы ответим в
              ближайшее время.</Text>
            <VStack w='500px' h='440px' backgroundColor='rgba(17, 53, 55, 0.9)' borderTopStartRadius='50px' px='50px' py='50px' spacing='30px'>
              <Input variant='brand-form' _placeholder={{ color: 'brand.orange' }} placeholder='Ваше имя' />
              <Input variant='brand-form' _placeholder={{ color: 'brand.orange' }} placeholder='Ваш телефон' />
              <Textarea variant='brand-form' _placeholder={{ color: 'brand.orange' }} placeholder='Ваше сообшение' />
              <Button size='md' variant='brand-orange'>Отправить</Button>
            </VStack>
          </VStack>
        </HStack>
      </VStack > */}
      <Footer />
    </VStack >
  );
});
