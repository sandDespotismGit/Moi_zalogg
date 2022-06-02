import { VStack, Text, HStack } from '@chakra-ui/react';
import React from 'react';

interface IStepComponentProps {
    firstWord: string;
    image: React.ReactElement;

}

export const Step = React.memo(({ firstWord, image }: IStepComponentProps) => {
    return (
        <VStack w='200px' h='200px'>
            <HStack w='full' h='full'>
                {image}
                <Text color='brand.white' fontWeight='800' fontSize='18px'>{firstWord}</Text>
            </HStack>
        </VStack>
    );
});