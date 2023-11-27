import { StackProps, HStack, Icon, Text, Stack, Box } from "@chakra-ui/react";
import { MoneyBackGuarantee, PayOnce, HassleFree } from "../icons/Icons";
import React from "react";

interface FeatureProps extends StackProps {
    icon: React.ElementType
}

export const Feature = (props: FeatureProps) => {
    const { children, icon, ...rest } = props;
    return (
        <HStack {...rest} spacing={['1.98em', '1.98em', '1.5em']}>
            <Icon as={icon} boxSize={'2.5rem'} />
            <Text fontSize='lg' fontWeight='bold' textAlign='left'>{children}</Text>
        </HStack>
    )
}


export const Features = () => {
    return (
        <Box maxW='994px' mx='auto' px='48px' my='3.5rem'>
            <Stack color='#171923' spacing={['2.4em', '2.4em', '1.56rem']} direction={['column', 'column', 'row']}>
                <Feature icon={MoneyBackGuarantee}>
                    30 days money back Guarantee
                </Feature>
                <Feature icon={HassleFree}>
                    No setup fees
                    100% hassle-free
                </Feature>
                <Feature icon={PayOnce}>
                    No monthly subscription
                    Pay once and for all
                </Feature>
            </Stack>
        </Box>
    )
}
