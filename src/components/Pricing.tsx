import { Box, Flex, Text, Button, Stack, StackProps, HStack, Icon } from "@chakra-ui/react";
import { CheckIcon } from "../icons/Icons";

export const ListItem = (props: StackProps) => {
    const { children, ...rest } = props;
    return (
        <HStack as='li' spacing='5' align={'flex-start'} {...rest}>
            <Icon as={CheckIcon} boxSize={'1.375rem'} flexShrink={0} />
            <Text>{children}</Text>
        </HStack>
    )
}

export const Pricing = () => {
    return (
        <Box px='6'>
            <Box maxW='994px' mx='auto' mt='-141px' borderRadius='xl' overflow='hidden' boxShadow='0px 10px 10px -5px rgba(0, 0, 0, 0.04), 0px 20px 25px -5px rgba(0, 0, 0, 0.10)'>
                <Flex direction={['column', 'column', 'row']}>
                    <Stack as='div' spacing='3' bg='#F0EAFB' px='3em' py={['2em', '2em', '3.5em']} w={[null, null, '378px']}>
                        <Text fontSize='2xl' lineHeight='2rem' fontWeight='extrabold' textAlign='center'>Premium PRO</Text>
                        <Text fontSize={['5xl', '5xl', '6xl']} lineHeight='100%' fontWeight='extrabold' textAlign='center'>$329</Text>
                        <Text fontSize='lg' lineHeight='1.75rem' fontWeight='medium' textAlign='center'>billed just once</Text>
                        <Button bg='#805AD5' size='lg' color='#F7FAFC'  mt='3' _hover={{ bgColor: '#6053D0' }}>Get Started</Button>
                    </Stack>

                    <Box color='#2D3748' bg='white' fontSize='lg' p='48px'>
                        <Text mb='6'>Access these features when you get this pricing package for your business.</Text>

                        <Stack as='ul' spacing='4'>
                            <ListItem>International calling and messaging API</ListItem>
                            <ListItem>Additional phone numbers</ListItem>
                            <ListItem>Automated messages via Zapier</ListItem>
                            <ListItem>24/7 support and consulting</ListItem>
                        </Stack>
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}