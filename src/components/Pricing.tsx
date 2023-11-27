import { Box, Flex, Text, Button, Stack, StackProps, HStack, Icon } from "@chakra-ui/react";
import { CheckIcon } from "../icons/Icons";

export const ListItem = (props: StackProps) => {
    const { children, ...rest } = props;
    return (
        <HStack as='li' spacing='20px' {...rest}>
            <Icon as={CheckIcon} w='22px' h='22px' />
            <Text>{children}</Text>
        </HStack>
    )
}

export const Pricing = () => {
    return (
        <Box maxW='994px' mx='auto' mt='-141px' borderRadius='xl' overflow='hidden' boxShadow='0px 10px 10px -5px rgba(0, 0, 0, 0.04), 0px 20px 25px -5px rgba(0, 0, 0, 0.10)'>
            <Flex>
                <Stack as='div' spacing='0.7rem' bg='#F0EAFB' px='3em' py='3.5em' w='378px'>
                    <Text fontSize='1.5rem' lineHeight='2rem' fontWeight='800' textAlign='center'>Premium PRO</Text>
                    <Text fontSize='3.75rem' lineHeight='100%' fontWeight='800' textAlign='center'>$329</Text>
                    <Text fontSize='1.125rem' lineHeight='1.75rem' fontWeight='500' textAlign='center'>billed just once</Text>
                    <Button bg='#805AD5' size='lg' color='#F7FAFC' w='100%' mt='0.8rem' _hover={{bgColor: '#6053D0'}}>Get Started</Button>
                </Stack>

                <Box color='#2D3748' bg='white' fontSize='18px' p='48px'>
                    <Text mb='24px'>Access these features when you get this pricing package for your business.</Text>

                    <Stack as='ul' spacing='16px'>
                        <ListItem>International calling and messaging API</ListItem>
                        <ListItem>Additional phone numbers</ListItem>
                        <ListItem>Automated messages via Zapier</ListItem>
                        <ListItem>24/7 support and consulting</ListItem>
                    </Stack>
                </Box>
            </Flex>
        </Box>
    )
}