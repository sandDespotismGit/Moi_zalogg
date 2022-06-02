import { VStack, Text, HStack } from '@chakra-ui/react';
import React from 'react';

interface ICardComponentProps {
    firstWord: string;
    secondWord?: string;
    image: React.ReactElement;

}

export const Card = React.memo(({ firstWord, secondWord, image }: ICardComponentProps) => {
    return (
        <VStack w='430px' h='200px' backgroundColor='brand.bluelight' borderRadius='10px' px='40px' py='25px' overflow='h' position='relative'>
            <HStack w='full' h='full'>
                <VStack align='start' w='170px' h='full'>
                    <Text color='brand.white' fontWeight='800' fontSize='18px'>{firstWord}</Text>
                    <Text color='brand.white' fontWeight='400' fontSize='14px'>{secondWord}</Text>
                </VStack>
                {image}
            </HStack>
        </VStack>
    );
});