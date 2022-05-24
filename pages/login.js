import {
    Flex,
    Heading,
    FormControl, FormLabel, Input,
    Text
} from '@chakra-ui/react';
import LoginForm from '../components/loginForm';

export default function Login() {
    return (
        <Flex 
            backgroundColor='#fafafa'
            height='100vh'
        >
            <Flex 
                backgroundColor='#020202'
                w='70%'
                margin='auto'
                borderRadius='10'
                flexDir='column' 
                p='10'
            >
                <Flex
                    flexDir='column'
                    p='5'
                    margin='0 auto'
                >
                    <Heading 
                        fontSize='6xl'
                        alignSelf='center'
                        letterSpacing='tight'
                        color='white'
                    >
                        StokEx        
                    </Heading>
                    <Heading
                        fontSize='sm'
                        letterSpacing='tight'
                        fontStyle='light'
                        color='white'
                    >
                        <Text>Don&apos;t FOMO your way to retirement.</Text>
                    </Heading>
                </Flex>
                <Flex
                    margin='0 auto'
                    paddingBottom='5'
                >
                    <LoginForm />
                </Flex>
            </Flex>
        </Flex>
    )
}