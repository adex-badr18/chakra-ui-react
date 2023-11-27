import { Box, Heading, Text } from "@chakra-ui/react";

export const Header = () => {
    return (
        <Box bg='#6B46C1' color='#F7FAFC' px='6' pt={['14', '20']} pb={['44', 60]}>
            <Heading textAlign={['left', 'left', 'center']} fontSize={['3xl', '3xl', '5xl']} fontWeight='extrabold'>Simple pricing for your business</Heading>
            <Text textAlign={['left', 'left', 'center']} mt='4' fontSize={['lg', 'lg', '2xl']} fontWeight='medium'>Plans that are carefully crafted to suit your business.</Text>
        </Box>
    )
}
