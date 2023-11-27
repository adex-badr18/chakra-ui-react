import { Box, Heading, Text } from "@chakra-ui/react";

export const Header = () => {
    return (
        <Box bg='#6B46C1' color='#F7FAFC' pt='5.53em' pb='15.39em'>
            <Heading textAlign='center' fontSize='3rem' fontWeight='800'>Simple pricing for your business</Heading>
            <Text textAlign='center' mt='1em' fontSize='1.5rem' fontWeight='500'>Plans that are carefully crafted to suit your business.</Text>
        </Box>
    )
}
