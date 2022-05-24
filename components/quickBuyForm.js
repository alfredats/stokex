import { useContext, useState } from 'react';
import { 
    Flex, 
    HStack,
    Button,
    IconButton, 
    Heading, 
    FormControl, FormLabel, FormErrorMessage,
    Input, NumberInput, NumberInputField,
    RadioGroup, Radio
} from '@chakra-ui/react'
import { MdClose, MdDoubleArrow } from 'react-icons/md';

import axios from 'axios';
import { Formik, Form, Field } from 'formik';
import SessionContext from '../contexts/SessionContext';
import QuickBuyContext  from '../contexts/QuickBuyContext';    


export default function QuickBuyForm(props) {
    const { appRouter } = useContext(SessionContext);
    const { quickBuy, changeQuickBuy } = useContext(QuickBuyContext);
    const { errorMsg, setErrorMsg } = useState(null);

    async function submitOrder({ticker, price, size, orderType}) {
        const ENDPOINT = process.env.NEXT_PUBLIC_CMS_HOST + process.env.NEXT_PUBLIC_CMS_ORDERNEW_ENDPOINT;
        const sessionKey = window.localStorage.getItem("sessionKey");
        const data = { 
                ticker: ticker,
                price: Number.parseFloat(price),
                size: Number.parseFloat(size),
                orderType: Number.parseInt(orderType) 
            }
        axios({
            url: ENDPOINT,
            method: 'post',
            headers: {
                'x-session-key': sessionKey
            },
            data : data
        }).then((resp) => {
            appRouter.push('/portfolio');
        })
        .catch((error) => {
            setErrorMsg('Error submitting order, please try again');
        })
    }

    return (
        <>
            <Flex justifyContent={'space-between'}>
                <Heading fontStyle={'light'} letterSpacing={'tight'}>Quick Buy</Heading>
                <IconButton icon={<MdClose/>} fontSize='xl' bgColor={'white'} borderRadius='50%' p={'3px'} onClick={() => changeQuickBuy(null)}/>
            </Flex>
            <Flex mt={'4'}>
                <Formik
                    initialValues = {{ticker: quickBuy, price: 0, size: 0, orderType: 0 }}
                    onSubmit= {async (values, actions) => {
                        submitOrder(values);
                        actions.setSubmitting(false);
                    }}
                >
                    { (props) => (
                        <Form 
                            h='200px'
                            display='flex' 
                            flexDir='row' 
                            justifyContent='space-between'
                        > 
                            <Field name='ticker'>
                                {({ field, form }) => (
                                    <FormControl> 
                                        <FormLabel htmlFor='ticker' fontWeight={'bold'} letterSpacing='tight'>Ticker</FormLabel>
                                        <Input {...field} id='ticker' backgroundColor='white' isDisabled value={(quickBuy === null) ? '' : quickBuy}/>
                                    </FormControl>
                                )}
                            </Field>
                            <Field name='price'>
                                {({ field, form }) => (
                                    <FormControl>
                                        <FormLabel htmlFor='price' fontWeight='bold' letterSpacing={'tight'}>Price</FormLabel>
                                        <NumberInput min={0}>
                                            <NumberInputField {...field} id='price' backgroundColor={'white'} />
                                        </NumberInput>
                                    </FormControl>
                                )}
                            </Field>
                            <Field name='size'>
                                {({field, form}) => (
                                    <FormControl>
                                        <FormLabel htmlFor='quantity' fontWeight={'bold'} letterSpacing='tight'>Quantity</FormLabel>
                                        <NumberInput min={0}>
                                            <NumberInputField {...field} id='size' backgroundColor={'white'} />
                                        </NumberInput>
                                    </FormControl>
                                )}
                            </Field>
                            <Field name='orderType'>
                                {({field, form}) => (
                                    <FormControl mt={'2'}>
                                        <FormLabel  htmlFor='orderType' fontWeight='bold' letterSpacing={'tight'}>Order type</FormLabel>
                                        <RadioGroup {...field} >
                                            <HStack spacing='20px'>
                                                <Radio {...field} value='1'>Buy</Radio>
                                                <Radio {...field} value='2'>Sell</Radio>
                                            </HStack>
                                        </RadioGroup>
                                    </FormControl> 
                                )}
                            </Field>
                            { errorMsg && 
                                <FormErrorMessage>{errorMsg}</FormErrorMessage>
                            }
                            <Button 
                                mt='4'
                                colorScheme={'teal'}
                                type='submit'
                                disabled={props.isSubmitting}
                            >Submit Order</Button>
                        </Form>
                    )}
                </Formik>
            </Flex>
        </>
    )
}