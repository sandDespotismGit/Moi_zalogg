import { HStack, VStack, Text } from '@chakra-ui/react';
import React from 'react';

interface IBlockComponentProps {
    firstWord: string;
    secondWord?: string;
    icon: React.ReactElement;
}

export const Block = React.memo(({ firstWord, secondWord, icon }: IBlockComponentProps) => {
    return (
        <VStack maxW='430px' backgroundColor='rgba(17, 53, 55, 0.9)' borderTopStartRadius='50px'>
            <VStack w='full' h='150px' align='start' paddingLeft='46px' paddingRight='25px' py='41px' spacing='25px'>
                <HStack spacing='22px'>
                    {icon}
                    <Text color='brand.beige' fontWeight='600' fontSize='18px'>{firstWord}</Text>
                </HStack>
                <Text color='brand.orange' fontWeight='600' fontSize='32px'>{secondWord}</Text>
            </VStack>
            <HStack backgroundColor='brand.orange' w='full' h='16px' />
        </VStack>
    );
});