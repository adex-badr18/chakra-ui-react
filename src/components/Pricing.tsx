import { Box, Flex, Text, Button, Stack } from "@chakra-ui/react"


export const Pricing = () => {
  return (
    <Box maxW='994px' mx='auto'>
        <Flex>
            <Stack as='div' spacing='0.7rem' bg='#F0EAFB' px='3em' py='3.5em' w='378px'>
                <Text fontSize='1.5rem' lineHeight='2rem' fontWeight='800' textAlign='center'>Premium PRO</Text>
                <Text fontSize='3.75rem' lineHeight='100%' fontWeight='800' textAlign='center'>$329</Text>
                <Text fontSize='1.125rem' lineHeight='1.75rem' fontWeight='500' textAlign='center'>billed just once</Text>
                <Button bg='#805AD5' size='lg' color='#F7FAFC' w='100%' mt='0.8rem'>Get Started</Button>
            </Stack>

            <Box></Box>
        </Flex>
    </Box>
  )
}