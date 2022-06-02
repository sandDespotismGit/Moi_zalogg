import { Box, VStack, Image, HStack, Text, Heading, Icon, Square, Spacer, Button, List, ListIcon, ListItem } from '@chakra-ui/react';
import React, { useState } from 'react';
import { AiOutlineFieldTime, AiOutlinePercentage } from 'react-icons/ai'
import { BsArrowLeft, BsArrowRight, BsFillPersonCheckFill } from 'react-icons/bs'
import { MdCheck } from 'react-icons/md'

import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { Header } from '../../components/header/Header';
import { Block } from '../../components/block/Block';
import { Footer } from '../../components/footer/Footer';
import { Card } from '../../components/card/Card';
import main_image from '../../assets/mainimage.png';
import flat_image from '../../assets/flatimage.png';
import office_image from '../../assets/oficeimage.png';
import land_image from '../../assets/landimage.png';
import car_image from '../../assets/car_image.png';
import house_image from '../../assets/house_image.png';

export const Main = React.memo(() => {
  const { height } = useWindowDimensions();
  const cards = [['Квартира', flat_image], ['Коммерческая недвижимость', office_image], ['Земельный участок', land_image], ['Автомобиль', car_image], ['Дом', house_image], ['Дача', house_image], ['Дача', house_image]];
  const [centralCard, setCard] = useState(1);
  const [LCard, setLCard] = useState(0);
  const [RCard, setRCard] = useState(2);

  return (
    <VStack minH={`${height}px`} py="45px" px="80px" backgroundColor="brand.white" >
      <Header />
      <Spacer />
      <HStack w='full'>
        <Box position='absolute' right='0px' bottom='0px' >
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
      <HStack w='full' h='350px' justify='space-between' align='center' zIndex={2} paddingTop='70px'>
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
      <Spacer />
      <VStack>
        <VStack spacing='30px'>
          <HStack>
            <Text fontSize='32px' fontWeight='800' color='brand.black'>
              Деньги под залог
            </Text><Text fontSize='32px' fontWeight='800' color='brand.bluelight'>
              5 типов
            </Text><Text fontSize='32px' fontWeight='800' color='brand.black'>
              имущества
            </Text>
          </HStack>
          <HStack w='560px'>
            <Text align='center'>
              Займ выдается под залог квартиры, дома, дачи, земельного участка, коммерческой недвижимости, офиса или автомобиля
            </Text>
          </HStack>
        </VStack>
      </VStack>
      <VStack w='full'>
        <HStack w='full' justify='space-between' paddingTop='60px'>
          <Card firstWord={cards[LCard][0]} image={<Image src={cards[LCard][1]} right='0px' bottom='0px' borderRadius='10px' position='absolute' />} />
          <Card firstWord={cards[centralCard][0]} image={<Image src={cards[centralCard][1]} right='0px' bottom='0px' borderRadius='10px' position='absolute' />} />
          <Card firstWord={cards[RCard][0]} image={<Image src={cards[RCard][1]} right='0px' bottom='0px' borderRadius='10px' position='absolute' />} />
        </HStack>
        <HStack w='full' justify='end' paddingTop='60px'>
          <HStack spacing='30px'>
            <Square>
              <Button onClick={() => {
                if (LCard === 0) {
                  setLCard(cards.length - 1)
                } else {
                  setLCard(LCard - 1)
                }
                if (centralCard === 0) {
                  setCard(cards.length - 1)
                } else {
                  setCard(centralCard - 1)
                }
                if (RCard === 0) {
                  setRCard(cards.length - 1)
                } else {
                  setRCard(RCard - 1)
                }
              }}
                variant='brand-transparent-outline' p='0px' m='0px' boxSize='50px' leftIcon={<BsArrowLeft size={25} />} iconSpacing='0' />
            </Square>
            <Square >
              <Button onClick={() => {
                if (LCard === cards.length - 1) {
                  setLCard(0)
                } else {
                  setLCard(LCard + 1)
                }
                if (centralCard === cards.length - 1) {
                  setCard(0)
                } else {
                  setCard(centralCard + 1)
                }
                if (RCard === cards.length - 1) {
                  setRCard(0)
                } else {
                  setRCard(RCard + 1)
                }
              }} variant='brand-transparent-outline' p='0px' m='0px' boxSize='50px' leftIcon={<BsArrowRight size={25} />} iconSpacing='0' />
            </Square>
          </HStack>
        </HStack>
      </VStack>
      <HStack spacing='120px' align='top' paddingTop='60px' paddingBottom='80px'>
        <VStack spacing='40px'>
          <HStack>
            <Text fontSize='32px' fontWeight='800' color='brand.bluelight'>
              Требования
            </Text>
            <Text fontSize='32px' fontWeight='800' color='brand.black'>
              к заемщику
            </Text>
          </HStack>
          <List spacing={3} w='450px'>
            <ListItem fontSize='16px' color='brand.black'>
              <ListIcon as={MdCheck} color='brand.bluelight' w='30px' h='30px' />
              Гражданство РФ с пропиской в субъекте страны
            </ListItem>
            <ListItem fontSize='16px' color='brand.black'>
              <ListIcon as={MdCheck} color='brand.bluelight' w='30px' h='30px' />
              Возраст заемщика от 18 до 72 лет
              на момент внесения крайнего платежа
            </ListItem>
            <ListItem fontSize='16px' color='brand.black'>
              <ListIcon as={MdCheck} color='brand.bluelight' w='30px' h='30px' />
              Наличие документов на право пользования недвижимостью
            </ListItem>
          </List>
        </VStack>
        <VStack spacing='40px'>
          <HStack>
            <Text fontSize='32px' fontWeight='800' color='brand.bluelight'>
              Условия займа
            </Text>
            <Text fontSize='32px' fontWeight='800' color='brand.black'>
              под залог
            </Text>
          </HStack>
          <List spacing={3} w='450px'>
            <ListItem fontSize='16px' color='brand.black'>
              <ListIcon as={MdCheck} color='brand.bluelight' w='30px' h='30px' />
              Размер займа составляет 60% от суммы оценки закладываемого имущества
            </ListItem>
            <ListItem fontSize='16px' color='brand.black'>
              <ListIcon as={MdCheck} color='brand.bluelight' w='30px' h='30px' />
              Сумма займа от 200 000 ₽
            </ListItem>
            <ListItem fontSize='16px' color='brand.black'>
              <ListIcon as={MdCheck} color='brand.bluelight' w='30px' h='30px' />
              От 2 до 5% в месяц
            </ListItem>
          </List>
        </VStack>
      </HStack>
      <HStack h='535px' backgroundColor='brand.black'>
        <VStack>
          <HStack>
            <Text fontSize='32px' fontWeight='800' color='brand.bluelight'>
              Порядок получения
            </Text>
            <Text fontSize='32px' fontWeight='800' color='brand.white'>
              займа
            </Text>
          </HStack>
          <Text color='brand.white'>
            Вы остаетесь собственником имущества
          </Text>
          <HStack>

          </HStack>
        </VStack>
      </HStack>
      <Footer />
    </VStack >
  );
});
