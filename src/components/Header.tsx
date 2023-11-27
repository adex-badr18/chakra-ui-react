import { Box, Heading, Text } from "@chakra-ui/react";

export const Header = () => {
    return (
        <Box bg='#6B46C1' color='#F7FAFC' px='1.5rem' pt={['3.5em', '5.53em']} pb={['11em', '15.39em']}>
            <Heading textAlign={['left', 'left', 'center']} fontSize={['1.875rem', '1.875rem', '3rem']} fontWeight='800'>Simple pricing for your business</Heading>
            <Text textAlign={['left', 'left', 'center']} mt='1em' fontSize={['1.125rem', '1.125rem', '1.5rem']} fontWeight='500'>Plans that are carefully crafted to suit your business.</Text>
        </Box>
    )
}
