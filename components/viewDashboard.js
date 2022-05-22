import { React, useEffect, useState, useContext } from 'react';
import {
    Flex,
    Heading,
    Box,
    Text,
    Icon, IconButton,
    Table, Thead, Tbody, Tr, Th, Td,
    FormControl, FormLabel, 
    Divider, Link, Button,
    Input, 
    HStack,
    Radio, RadioGroup,
    NumberInput, NumberInputField, propNames
} from '@chakra-ui/react';
import { FiChevronUp, FiChevronDown, FiCalendar } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import { Formik, Form } from 'formik';

import SessionContext from '../contexts/SessionContext';
import axios from "axios";



export default function DashHome() {
    const [watchList, changeWatchList] = useState('hide');
    const [marketSummary, changeMarketSummary] = useState('hide');
    const [quickBuy, changeQuickBuy] = useState(null);

    const { appRouter } = useContext(SessionContext);
    const [ data, setData ] = useState(null);
    const [ isLoading, setLoading ] = useState(false)
    useEffect(() => {
        setLoading(true);
        const sessionKey = window.localStorage.getItem("sessionKey");
        console.log(">>> sessionKey: " + sessionKey);

        if (!sessionKey) {
            appRouter.push("/");
            return;
        }
        const ENDPOINT = process.env.NEXT_PUBLIC_CMS_HOST + process.env.NEXT_PUBLIC_CMS_DASHBOARD_ENDPOINT;
        axios({
            url: ENDPOINT,
            method:'get',
            headers: {
                'x-session-key': sessionKey
            }
        }).then((response) => {
            setData(response.data);
            setLoading(false);
        }).catch((error) => {
            console.log(error);
            appRouter.push("/");
        })
    }, [appRouter])
    
    if (isLoading) { return <Heading>Loading...</Heading> }
    if (!data) { return <Heading>Error!</Heading> }

    return (
        <Flex w='100%'>
            {/* column 2 */}
            <Flex
                w={quickBuy===null ? '100%' : '65%'}
                p={'3%'}
                flexDir='column'
                overflow={'auto'}
                minH="100vh"
            >
                <Heading fontWeight={'normal'} mb={4} letterSpacing='tight'>Welcome back, <Flex fontWeight={'bold'} display='inline-flex'>{data.name}</Flex></Heading>
                <Flex flexDir={'row'} justifyContent='space-between'>
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
                                <Text fontWeight={'bold'} fontSize='2xl'>${data.monies.portfolioValue}</Text>
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
                                <Text color='gray' fontSize='sm'>Available Funds</Text>
                                <Text fontWeight={'bold'} fontSize='2xl'>${data.monies.availableFunds}</Text>
                            </Flex>
                        </Flex>
                    </Box>
                </Flex>
                <Divider mt={'8'}/>

                {/* watchlist */}
                <Flex justifyContent={'space-between'} mt={8}>
                    <Flex align={'flex-end'}>
                        <Heading as='h2' size='lg' letterSpacing='tight'>Your Watchlist</Heading>
                        <Text fontSize='sm' color='gray' ml={4}>22 April 2022</Text>
                    </Flex>
                </Flex>
                <Flex flexDir='column'>
                    <Flex overflow='auto'>
                        <Table variant='unstyled' mt={4}>
                            <Thead>
                                <Tr>
                                    <Th>Symbol</Th>
                                    <Th>Exchange</Th>
                                    <Th isNumeric>Current price</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr className='stockTableRow' onClick={() => changeQuickBuy('AAPL')}>
                                    <Td>
                                        <Flex>
                                            <Flex flexDir={'column'} >
                                                <Heading size='sm' letterSpacing={'tight'}>Apple Inc.</Heading>
                                                <Text fontSize='sm' color='gray'>NASDAQ:AAPL</Text>
                                            </Flex>
                                        </Flex>
                                    </Td>
                                    <Td>Technology</Td>
                                    <Td >
                                        <Flex align={'center'}>
                                            <Text isNumeric>$154.70</Text>
                                            <Text ml={2} fontSize='sm' color={'green'}>+0.3%</Text>
                                        </Flex>
                                    </Td>
                                </Tr>
                                <Tr className='stockTableRow' onClick={() => changeQuickBuy('MSFT')}>
                                    <Td>
                                        <Flex>
                                            <Flex flexDir={'column'}>
                                                <Heading size='sm' letterSpacing={'tight'}>Microsoft Inc.</Heading>
                                                <Text fontSize='sm' color='gray'>NASDAQ:MSFT</Text>
                                            </Flex>
                                        </Flex>
                                    </Td>
                                    <Td>Technology</Td>
                                    <Td>
                                        <Flex flexDir={'row'} alignItems={'center'}>
                                            <Text isNumeric>$222.70</Text>
                                            <Text ml={2} fontSize='sm' color={'green'}>+1.1%</Text>
                                        </Flex>

                                    </Td>
                                </Tr>
                                <Tr className='stockTableRow' onClick={() => changeQuickBuy('NFLX')}>
                                    <Td>
                                        <Flex>
                                            <Flex flexDir={'column'}>
                                                <Heading size='sm' letterSpacing={'tight'}>Netflix Inc.</Heading>
                                                <Text fontSize='sm' color='gray'>NASDAQ:NFLX</Text>
                                            </Flex>
                                        </Flex>
                                    </Td>
                                    <Td>Technology</Td>
                                    <Td>
                                        <Flex flexDir={'row'}>
                                            <Text isNumeric>$80.56</Text>
                                            <Text ml={2} alignItems={'center'} fontSize='sm' color={'#bc150d'}>-7.87%</Text>
                                        </Flex>
                                    </Td>
                                </Tr>
                                {watchList == 'show' &&
                                    <>
                                <Tr className='stockTableRow' onClick={() => changeQuickBuy('AAPL')}>
                                    <Td>
                                        <Flex>
                                            <Flex flexDir={'column'} >
                                                <Heading size='sm' letterSpacing={'tight'}>Apple Inc.</Heading>
                                                <Text fontSize='sm' color='gray'>NASDAQ:AAPL</Text>
                                            </Flex>
                                        </Flex>
                                    </Td>
                                    <Td>Technology</Td>
                                    <Td >
                                        <Flex align={'center'}>
                                            <Text isNumeric>$154.70</Text>
                                            <Text ml={2} fontSize='sm' color={'green'}>+0.3%</Text>
                                        </Flex>
                                    </Td>
                                </Tr>
                                <Tr className='stockTableRow' onClick={() => changeQuickBuy('MSFT')}>
                                    <Td>
                                        <Flex>
                                            <Flex flexDir={'column'}>
                                                <Heading size='sm' letterSpacing={'tight'}>Microsoft Inc.</Heading>
                                                <Text fontSize='sm' color='gray'>NASDAQ:MSFT</Text>
                                            </Flex>
                                        </Flex>
                                    </Td>
                                    <Td>Technology</Td>
                                    <Td>
                                        <Flex flexDir={'row'} alignItems={'center'}>
                                            <Text isNumeric>$222.70</Text>
                                            <Text ml={2} fontSize='sm' color={'green'}>+1.1%</Text>
                                        </Flex>

                                    </Td>
                                </Tr>
                                <Tr className='stockTableRow' onClick={() => changeQuickBuy('NFLX')}>
                                    <Td>
                                        <Flex>
                                            <Flex flexDir={'column'}>
                                                <Heading size='sm' letterSpacing={'tight'}>Netflix Inc.</Heading>
                                                <Text fontSize='sm' color='gray'>NASDAQ:NFLX</Text>
                                            </Flex>
                                        </Flex>
                                    </Td>
                                    <Td>Technology</Td>
                                    <Td>
                                        <Flex flexDir={'row'}>
                                            <Text isNumeric>$80.56</Text>
                                            <Text ml={2} alignItems={'center'} fontSize='sm' color={'#bc150d'}>-7.87%</Text>
                                        </Flex>
                                    </Td>
                                </Tr>
                                    </>
                                }
                            </Tbody>
                        </Table>
                    </Flex>
                    <Flex align='center'>
                        <Divider />
                        <Flex>
                            <IconButton icon={watchList == 'show' ? <FiChevronUp /> : <FiChevronDown />} 
                                onClick={() => {
                                    if (watchList == 'show') {
                                        changeWatchList('none');
                                    } else {
                                        changeWatchList('show');
                                    }
                                }}

                            />
                        </Flex>
                        <Divider />
                    </Flex>
                </Flex>


                <Flex justifyContent={'space-between'} mt={8}>
                    <Flex align={'flex-end'}>
                        <Heading as='h2' size='lg' letterSpacing='tight'>Market Summary</Heading>
                        <Text fontSize='sm' color='gray' ml={4}>22 April 2022</Text>
                    </Flex>
                    <IconButton icon={<FiCalendar />}/>
                </Flex>
                <Flex flexDir='column'>
                    <Flex overflow='auto'>
                        <Table variant='unstyled' mt={4}>
                            <Thead>
                                <Tr>
                                    <Th>Symbol</Th>
                                    <Th>Exchange</Th>
                                    <Th isNumeric>Current price</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr className='stockTableRow' onClick={() => changeQuickBuy('AAPL')}>
                                    <Td>
                                        <Flex>
                                            <Flex flexDir={'column'} >
                                                <Heading size='sm' letterSpacing={'tight'}>Apple Inc.</Heading>
                                                <Text fontSize='sm' color='gray'>NASDAQ:AAPL</Text>
                                            </Flex>
                                        </Flex>
                                    </Td>
                                    <Td>Technology</Td>
                                    <Td >
                                        <Flex align={'center'}>
                                            <Text isNumeric>$154.70</Text>
                                            <Text ml={2} fontSize='sm' color={'green'}>+0.3%</Text>
                                        </Flex>
                                    </Td>
                                </Tr>
                                <Tr className='stockTableRow' onClick={() => changeQuickBuy('MSFT')}>
                                    <Td>
                                        <Flex>
                                            <Flex flexDir={'column'}>
                                                <Heading size='sm' letterSpacing={'tight'}>Microsoft Inc.</Heading>
                                                <Text fontSize='sm' color='gray'>NASDAQ:MSFT</Text>
                                            </Flex>
                                        </Flex>
                                    </Td>
                                    <Td>Technology</Td>
                                    <Td>
                                        <Flex flexDir={'row'} alignItems={'center'}>
                                            <Text isNumeric>$222.70</Text>
                                            <Text ml={2} fontSize='sm' color={'green'}>+1.1%</Text>
                                        </Flex>

                                    </Td>
                                </Tr>
                                <Tr className='stockTableRow' onClick={() => changeQuickBuy('NFLX')}>
                                    <Td>
                                        <Flex>
                                            <Flex flexDir={'column'}>
                                                <Heading size='sm' letterSpacing={'tight'}>Netflix Inc.</Heading>
                                                <Text fontSize='sm' color='gray'>NASDAQ:NFLX</Text>
                                            </Flex>
                                        </Flex>
                                    </Td>
                                    <Td>Technology</Td>
                                    <Td>
                                        <Flex flexDir={'row'}>
                                            <Text isNumeric>$80.56</Text>
                                            <Text ml={2} alignItems={'center'} fontSize='sm' color={'#bc150d'}>-7.87%</Text>
                                        </Flex>
                                    </Td>
                                </Tr>
                                {marketSummary == 'show' &&
                                    <>
                                <Tr className='stockTableRow' onClick={() => changeQuickBuy('AAPL')}>
                                    <Td>
                                        <Flex>
                                            <Flex flexDir={'column'} >
                                                <Heading size='sm' letterSpacing={'tight'}>Apple Inc.</Heading>
                                                <Text fontSize='sm' color='gray'>NASDAQ:AAPL</Text>
                                            </Flex>
                                        </Flex>
                                    </Td>
                                    <Td>Technology</Td>
                                    <Td >
                                        <Flex align={'center'}>
                                            <Text isNumeric>$154.70</Text>
                                            <Text ml={2} fontSize='sm' color={'green'}>+0.3%</Text>
                                        </Flex>
                                    </Td>
                                </Tr>
                                <Tr className='stockTableRow' onClick={() => changeQuickBuy('MSFT')}>
                                    <Td>
                                        <Flex>
                                            <Flex flexDir={'column'}>
                                                <Heading size='sm' letterSpacing={'tight'}>Microsoft Inc.</Heading>
                                                <Text fontSize='sm' color='gray'>NASDAQ:MSFT</Text>
                                            </Flex>
                                        </Flex>
                                    </Td>
                                    <Td>Technology</Td>
                                    <Td>
                                        <Flex flexDir={'row'} alignItems={'center'}>
                                            <Text isNumeric>$222.70</Text>
                                            <Text ml={2} fontSize='sm' color={'green'}>+1.1%</Text>
                                        </Flex>

                                    </Td>
                                </Tr>
                                <Tr className='stockTableRow' onClick={() => changeQuickBuy('NFLX')}>
                                    <Td>
                                        <Flex>
                                            <Flex flexDir={'column'}>
                                                <Heading size='sm' letterSpacing={'tight'}>Netflix Inc.</Heading>
                                                <Text fontSize='sm' color='gray'>NASDAQ:NFLX</Text>
                                            </Flex>
                                        </Flex>
                                    </Td>
                                    <Td>Technology</Td>
                                    <Td>
                                        <Flex flexDir={'row'}>
                                            <Text isNumeric>$80.56</Text>
                                            <Text ml={2} alignItems={'center'} fontSize='sm' color={'#bc150d'}>-7.87%</Text>
                                        </Flex>
                                    </Td>
                                </Tr>
                                    </>
                                }
                            </Tbody>
                        </Table>
                    </Flex>
                    <Flex align='center'>
                        <Divider />
                        <Flex>
                            <IconButton icon={marketSummary == 'show' ? <FiChevronUp /> : <FiChevronDown />} 
                                onClick={() => {
                                    if (marketSummary == 'show') {
                                        changeMarketSummary('none');
                                    } else {
                                        changeMarketSummary('show');
                                    }
                                }}

                            />
                        </Flex>
                        <Divider />
                    </Flex>
                </Flex>
            </Flex>



            {/* column 3 */}
            { quickBuy !== null &&
                <Flex
                    w={'35%'}
                    bgColor="#f5f5f5"
                    p='3%'
                    flexDir='column'
                    overflow={'auto'}
                >
                    <Flex justifyContent={'space-between'}>
                        <Heading fontStyle={'light'} letterSpacing={'tight'}>Quick Buy</Heading>
                        <IconButton icon={<MdClose/>} fontSize='xl' bgColor={'white'} borderRadius='50%' p={'3px'} onClick={() => changeQuickBuy(null)}/>
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
                                    <FormLabel htmlFor='ticker' fontWeight={'bold'} letterSpacing='tight'>Ticker</FormLabel>
                                    <Input id='ticker' backgroundColor='white' isDisabled value={(quickBuy === null) ? '' : quickBuy}/>
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
