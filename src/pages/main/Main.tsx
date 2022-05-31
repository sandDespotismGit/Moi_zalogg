import { Box, VStack, Image, HStack, Text, Heading, Icon, Square, Spacer, Button } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineFieldTime, AiOutlinePercentage } from 'react-icons/ai'
import { BsFillPersonCheckFill } from 'react-icons/bs'

import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { Header } from '../../components/header/Header';
import { Block } from '../../components/block/Block';
import { Footer } from '../../components/footer/Footer';
import main_image from '../../assets/mainimage.png';


export const Main = React.memo(() => {
  const { height } = useWindowDimensions();
  return (
    <VStack minH={`${height}px`} py="45px" px="80px" backgroundColor="brand.white" >
      <Header />
      <Spacer />
      <HStack w='full'>
        <Box position='absolute' right='0px' bottom='0px'>
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
        <VStack align='start' spacing='30px'>
          <VStack align='start'>
            <HStack>
              <Heading maxW='600px' fontSize={['20px', '40px']}> ДЕНЬГИ ДЛЯ </Heading>
              <Heading color='brand.bluelight' fontSize={['20px', '40px']}>БИЗНЕСА</Heading>
            </HStack>
            <Heading maxW='600px' fontSize={['20px', '40px']} >ПОД ЗАЛОГ ИМУЩЕСТВА</Heading>
          </VStack>
          <Text fontSize='18px' maxW='400px' paddingBottom='20px'>Займ под минимальный процент от 3 до 7%</Text>
          <Button size='md' variant='brand-border-blue'>Оставить заявку</Button>
        </VStack>
      </HStack>
      <HStack w='full' justify='space-between' zIndex={10} py="50px">
        <Block firstWord='БЫСТРО' secondWord='2 дня от заявки до заключения договора!' icon={<Square size='60px'><Icon as={AiOutlineFieldTime} color='brand.white' boxSize='100%' /></Square>} />
        <Block firstWord='ОТ 2% В МЕСЯЦ' secondWord='2 дня от заявки до заключения договора!' icon={<Square size='60px'><Icon as={AiOutlinePercentage} color='brand.white' boxSize='100%' /></Square>} />
        <Block firstWord='ДАЖЕ С ПЛОХОЙ ИСТОРИЕЙ' secondWord='2 дня от заявки до заключения договора!' icon={<Square size='60px'><Icon as={BsFillPersonCheckFill} color='brand.white' boxSize='100%' /></Square>} />
      </HStack>
      <Footer />
    </VStack >
  );
});
