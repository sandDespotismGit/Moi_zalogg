import { Box, VStack, Image, HStack, Text, Heading, Icon, Square, Spacer, Button, List, ListIcon, ListItem, FormControl, InputGroup, Input, Fade, InputRightElement, Tooltip, Select } from '@chakra-ui/react';
import React, { useState } from 'react';
import { NotAllowedIcon, CheckIcon } from '@chakra-ui/icons'
import { AiOutlineFieldTime, AiOutlinePercentage } from 'react-icons/ai'
import { Formik, Form, Field, FieldProps } from "formik";
import { BsArrowLeft, BsArrowRight, BsFillPersonCheckFill } from 'react-icons/bs'
import { MdDownloadDone } from 'react-icons/md'

import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { Header } from '../../components/header/Header';
import { Block } from '../../components/block/Block';
import { Footer } from '../../components/footer/Footer';
import { Card } from '../../components/card/Card';
import { IRequestForm } from "../../interfaces/IRequestForm";
import main_image from '../../assets/mainimage.png';
import flat_image from '../../assets/flatimage.png';
import office_image from '../../assets/oficeimage.png';
import land_image from '../../assets/landimage.png';
import car_image from '../../assets/car_image.png';
import house_image from '../../assets/house_image.png';
import request_image from '../../assets/requestimage.png';


export const Main = React.memo(() => {
  const ph = ['7px', '15px', '30px', '45px']
  const pw = ['20px', '40px', '60px', '80px']
  const { height } = useWindowDimensions();

  const handleFormSubmit = () => { };

  const cards = [['Квартира', flat_image], ['Коммерческая недвижимость', office_image], ['Земельный участок', land_image], ['Автомобиль', car_image], ['Дом', house_image], ['Дача', house_image], ['Дача', house_image]];
  const [centralCard, setCard] = useState(1);
  const [LCard, setLCard] = useState(0);
  const [RCard, setRCard] = useState(2);

  return (
    <VStack minH={`${height}px`} backgroundColor="brand.white" spacing={0} >
      <Header />
      <VStack w='full' bgGradient='linear-gradient(90deg, #FDFDFF 0%, #D8E7EB 100%)'>
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
        <HStack w='full' h='300px' justify='space-between' align='center' zIndex={2} px={pw} py={ph}>
          <VStack align='start' spacing='30px' paddingTop='50px'>
            <VStack align='start'>
              <HStack>
                <Heading maxW='600px' fontSize={['20px', '36px']}> ДЕНЬГИ ДЛЯ </Heading>
                <Heading color='brand.bluelight' fontSize={['20px', '36px']}>БИЗНЕСА</Heading>
              </HStack>
              <Heading maxW='600px' fontSize={['20px', '36px']} >ПОД ЗАЛОГ ИМУЩЕСТВА</Heading>
            </VStack>
            <Text fontSize='18px' maxW='450px'>Займ под минимальный процент от 3 до 7%</Text>
            <Button size='md' variant='brand-border-blue'>Оставить заявку</Button>
          </VStack>
        </HStack>
        <HStack w='full' justify='space-between' zIndex={10} px={pw} py={ph}>
          <Block firstWord='БЫСТРО' secondWord='2 дня от заявки до заключения договора!' icon={<Square size='60px'><Icon as={AiOutlineFieldTime} color='brand.white' boxSize='100%' /></Square>} />
          <Block firstWord='ОТ 2% В МЕСЯЦ' secondWord='2 дня от заявки до заключения договора!' icon={<Square size='60px'><Icon as={AiOutlinePercentage} color='brand.white' boxSize='100%' /></Square>} />
          <Block firstWord='ДАЖЕ С ПЛОХОЙ ИСТОРИЕЙ' secondWord='2 дня от заявки до заключения договора!' icon={<Square size='60px'><Icon as={BsFillPersonCheckFill} color='brand.white' boxSize='100%' /></Square>} />
        </HStack>
      </VStack>
      <Spacer />
      <VStack px={pw} py={ph}>
        <VStack spacing='30px' paddingTop='20px'>
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
      <VStack w='full' px={pw} py={ph}>
        <HStack w='full' justify='space-between'>
          <Card firstWord={cards[LCard][0]} image={<Image src={cards[LCard][1]} right='0px' bottom='0px' borderRadius='10px' position='absolute' />} />
          <Card firstWord={cards[centralCard][0]} image={<Image src={cards[centralCard][1]} right='0px' bottom='0px' borderRadius='10px' position='absolute' />} />
          <Card firstWord={cards[RCard][0]} image={<Image src={cards[RCard][1]} right='0px' bottom='0px' borderRadius='10px' position='absolute' />} />
        </HStack>
        <HStack w='full' justify='end' paddingTop='30px'>
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
      <HStack spacing='120px' align='top' paddingTop='60px' paddingBottom='80px' px={pw} py={ph}>
        <VStack spacing='40px' align='start'>
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
              <ListIcon as={MdDownloadDone} color='brand.bluelight' w='30px' h='30px' />
              Гражданство РФ с пропиской в субъекте страны
            </ListItem>
            <ListItem fontSize='16px' color='brand.black'>
              <ListIcon as={MdDownloadDone} color='brand.bluelight' w='30px' h='30px' />
              Возраст заемщика от 18 до 72 лет
              на момент внесения крайнего платежа
            </ListItem>
            <ListItem fontSize='16px' color='brand.black'>
              <ListIcon as={MdDownloadDone} color='brand.bluelight' w='30px' h='30px' />
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
              <ListIcon as={MdDownloadDone} color='brand.bluelight' w='30px' h='30px' />
              Размер займа составляет 60% от суммы оценки закладываемого имущества
            </ListItem>
            <ListItem fontSize='16px' color='brand.black'>
              <ListIcon as={MdDownloadDone} color='brand.bluelight' w='30px' h='30px' />
              Сумма займа от 200 000 ₽
            </ListItem>
            <ListItem fontSize='16px' color='brand.black'>
              <ListIcon as={MdDownloadDone} color='brand.bluelight' w='30px' h='30px' />
              От 2 до 5% в месяц
            </ListItem>
          </List>
        </VStack>
      </HStack>
      <HStack w='full' justify='space-between' position='relative' h='800px' px={pw} py={ph}>
        <Box position='absolute' right='0px' bottom='0px' zIndex={5}>
          <Image
            src={request_image}
            alt="мойзалог.рф"
            loading="lazy"
            w="full"
            h="full"
            htmlWidth="full"
            htmlHeight="full"
          />
        </Box>
        <VStack align='start' zIndex={10}>
          <HStack w='370px' >
            <Text fontSize='32px' fontWeight='800' color='brand.bluelight' >
              Оставьте
            </Text>
            <Text fontSize='32px' fontWeight='800' color='brand.black' align='start'>
              заявку
            </Text>
          </HStack>
          <Text w='370px' align='start'>
            И мы свяжемся с Вами в ближайшее время для уточнения всех условий
          </Text>
          <Box h='full'>
            <Formik
              key="request"
              initialValues={
                {
                  name: '',
                  number: '',
                  email: '',
                  type: '',
                  cost: '',
                } as IRequestForm
              }
              // validationSchema={RegistrationSchema}
              onSubmit={handleFormSubmit}
            >
              <Form>
                <HStack>
                  <VStack spacing={[3, 4]} align="center">
                    <Field name="name">
                      {({ field, form }: FieldProps<string, IRequestForm>) => (
                        <FormControl isRequired={true} isInvalid={!!form.values.name && !!form.errors.name}>
                          <InputGroup size="md">
                            <Input
                              {...field}
                              id="request-name"
                              variant="brand-form"
                              placeholder="Имя"
                              fontSize={['xs', 'sm']}
                            />
                            <Fade in={!!form.values.name}>
                              <InputRightElement>
                                {form.errors.name ? (
                                  <Tooltip label={form.errors.name} placement="bottom">
                                    <NotAllowedIcon color="brand.black" />
                                  </Tooltip>
                                ) : (
                                  <CheckIcon color="brand.black" />
                                )}
                              </InputRightElement>
                            </Fade>
                          </InputGroup>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="number">
                      {({ field, form }: FieldProps<string, IRequestForm>) => (
                        <FormControl isRequired={true} isInvalid={!!form.values.number && !!form.errors.number}>
                          <InputGroup size="md">
                            <Input
                              {...field}
                              id="request-number"
                              variant="brand-form"
                              placeholder="Телефон"
                              fontSize={['xs', 'sm']}
                            />
                            <Fade in={!!form.values.number}>
                              <InputRightElement>
                                {form.errors.number ? (
                                  <Tooltip label={form.errors.number} placement="bottom">
                                    <NotAllowedIcon color="brand.black" />
                                  </Tooltip>
                                ) : (
                                  <CheckIcon color="brand.black" />
                                )}
                              </InputRightElement>
                            </Fade>
                          </InputGroup>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="email">
                      {({ field, form }: FieldProps<string, IRequestForm>) => (
                        <FormControl isRequired={true} isInvalid={!!form.values.email && !!form.errors.email}>
                          <InputGroup size="md">
                            <Input
                              {...field}
                              id="request-email"
                              variant="brand-form"
                              placeholder="E-mail"
                              fontSize={['xs', 'sm']}
                            />
                            <Fade in={!!form.values.email}>
                              <InputRightElement>
                                {form.errors.email ? (
                                  <Tooltip label={form.errors.email} placement="bottom">
                                    <NotAllowedIcon color="brand.black" />
                                  </Tooltip>
                                ) : (
                                  <CheckIcon color="brand.black" />
                                )}
                              </InputRightElement>
                            </Fade>
                          </InputGroup>
                        </FormControl>
                      )}
                    </Field>
                  </VStack>
                  <VStack spacing={[3, 4]} align="center">
                    <Field name="type">
                      {({ form }: FieldProps<string, IRequestForm>) => (
                        <FormControl isRequired={true} isInvalid={!!form.values.type && !!form.errors.type}>
                          <Select placeholder='Любое имущество' border='1px' borderRadius='0px' color='brand.bluelight' borderColor='brand.blielight' fontSize='sm'>
                            <option value='option1'>Дом</option>
                            <option value='option2'>Машина</option>
                            <option value='option3'>Квартира</option>
                          </Select>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="cost">
                      {({ field, form }: FieldProps<string, IRequestForm>) => (
                        <FormControl isRequired={true} isInvalid={!!form.values.cost && !!form.errors.cost}>
                          <InputGroup size="md">
                            <Input
                              {...field}
                              id="request-cost"
                              variant="brand-form"
                              placeholder="Сумма"
                              fontSize={['xs', 'sm']}
                            />
                            <Fade in={!!form.values.cost}>
                              <InputRightElement>
                                {form.errors.cost ? (
                                  <Tooltip label={form.errors.cost} placement="bottom">
                                    <NotAllowedIcon color="brand.black" />
                                  </Tooltip>
                                ) : (
                                  <CheckIcon color="brand.black" />
                                )}
                              </InputRightElement>
                            </Fade>
                          </InputGroup>
                        </FormControl>
                      )}
                    </Field>
                    <Button type='submit' variant='brand-blue'>
                      Оставить заявку
                    </Button>
                  </VStack>
                </HStack>
              </Form>
            </Formik>
          </Box>
        </VStack>
        <Box p='50px' borderRadius='10px' bgColor='brand.black80' justifyContent='center' zIndex={11}>
          <Text w='405px' fontSize='24px' color='brand.white'>
            Наша миссия — выдавать гражданам безопасные займы, обеспеченные недвижимостью по разумной процентной ставке, без переоформления недвижимости.
          </Text>
        </Box>
      </HStack>
      <Footer />
    </VStack >
  );
});
