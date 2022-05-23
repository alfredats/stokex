import { useContext, useEffect, useState } from 'react';
import {
    Flex,
    Heading,
    Box,
    Text,
    IconButton,
    Table, Thead, Tbody, Tr, Th, Td,
    FormControl, FormLabel, 
    Divider, Button,
    Input, 
    HStack,
    Radio, RadioGroup,
    NumberInput, NumberInputField 
} from '@chakra-ui/react';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import MyChart from "./myChart";
import { Formik, Form } from 'formik';

import axios from 'axios';
import SessionContext from '../contexts/SessionContext';
import OrderTable from './OrderTable';


export default function PortfolioView(data) {
    const [ showActive, changeShowActive ] = useState('hide');
    const [ modifyOrder, changeModifyOrder ] = useState(null);

    return (
        <Flex w='100%'>
            <Flex 
                w='100%'
                p={'3%'}
                flexDir='column'
                overflow={'auto'}
                minH='100vh'
            >
                <Heading fontWeight={'bold'} mb={4} letterSpacing='tight'>
                    Your Portfolio
                </Heading>
                <Flex mt={6}>
                    <Heading as='h2' size='lg' letterSpacing='tight'>Portfolio Value</Heading>
                </Flex>
                {/* PORTFOLIO OVERVIEW */}
                <Flex w='80%' mt={4} flexDir='column'>
                    <Flex flexDir='row' justifyContent='space-between'>
                        <Box
                            border={'1px'}
                            borderColor={'gray.300'}
                            borderRadius='25px'
                            mt='4'
                            w='45%'
                            h='80px'
                            backgroundColor={'#f8f8ff'}
                        >
                            <Flex p='3' ml='2'>
                                <Flex flexDir='column' justifyContent={'space-between'}>
                                    <Text color='gray' fontSize='sm'>Portfolio Value</Text>
                                    <Text fontWeight={'bold'} fontSize='2xl'>${data.monies.latest.portfolioValue}</Text>
                                </Flex>
                            </Flex>
                        </Box>
                        <Box
                            border={'1px'}
                            borderColor={'gray.300'}
                            borderRadius='25px'
                            mt='4'
                            w='45%'
                            h='80px'
                            backgroundColor={'#f8f8ff'}
                        >
                            <Flex p='3' ml='2'>
                                <Flex flexDir='column' justifyContent={'space-between'}>
                                    <Text color='gray' fontSize='sm'>Percentage Change (1 month)</Text>
                                    <Text fontWeight={'bold'} fontSize='2xl' color='green'>+ 3.23%</Text>
                                </Flex>
                            </Flex>
                        </Box>
                    </Flex>
            
                    <Flex mt={'5'}>
                        <MyChart {...data.monies.timeSeries} />
                    </Flex>
                </Flex>
                <Divider mt={'8'} />

                {/* order info */}
                <OrderTable title='Active Orders' data={data.orders.active} />
                <OrderTable title='Completed Orders' data={data.orders.completed} />
            </Flex>
            

            { modifyOrder !== null &&
                <Flex
                    w={'35%'}
                    bgColor="#f5f5f5"
                    p='3%'
                    flexDir='column'
                    overflow={'auto'}
                >
                    <Flex justifyContent={'space-between'}>
                        <Heading fontStyle={'light'} letterSpacing={'tight'}>Modify Order</Heading>
                        <IconButton icon={<MdClose/>} fontSize='xl' bgColor={'white'} borderRadius='50%' p={'3px'} onClick={() => changeModifyOrder(null)}/>
                    </Flex>

                    <Flex mt={'4'}>
                        <Formik>
                            <Form 
                                h='200px'
                                display='flex' 
                                flexDir='row' 
                                justifyContent='space-between'
                            > 
                                <FormControl> 
                                    <FormLabel htmlFor='ticker' fontWeight={'bold'} letterSpacing='tight'>Order ID</FormLabel>
                                    <Input id='ticker' backgroundColor='white' isDisabled value={(modifierOrderID === null) ? '' : modifierOrderID}/>
                                </FormControl>
                                <FormControl>
                                    <FormLabel htmlFor='price' fontWeight='bold' letterSpacing={'tight'}>Price</FormLabel>
                                    <NumberInput min={0}>
                                        <NumberInputField id='price' backgroundColor={'white'} />
                                    </NumberInput>
                                </FormControl>
                                <FormControl>
                                    <FormLabel htmlFor='quantity' fontWeight={'bold'} letterSpacing='tight'>Quantity</FormLabel>
                                    <NumberInput min={0}>
                                        <NumberInputField id='price' backgroundColor={'white'} />
                                    </NumberInput>
                                </FormControl>
                                <FormControl mt={'2'}>
                                    <FormLabel htmlFor='orderType' fontWeight='bold' letterSpacing={'tight'}>Order type</FormLabel>
                                    <RadioGroup>
                                        <HStack spacing='20px'>
                                            <Radio value='buy'>Buy</Radio>
                                            <Radio value='sell'>Sell</Radio>
                                        </HStack>
                                    </RadioGroup>
                                </FormControl> 
                                <Button 
                                    mt='4'
                                    colorScheme={'teal'}
                                    type='submit'
                                >Submit Order</Button>
                            </Form>
                        </Formik>
                    </Flex>
                </Flex>
        }
        </Flex>
    )
}