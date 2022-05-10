import React, { useState } from 'react';
import {
    Flex,
    Heading,
    Avatar, AvatarGroup,
    Text,
    Icon, IconButton,
    FormControl, FormLabel, FormErrorMessage, FormHelperText,
    Table, Thead, Tbody, Tr, Th, Td,
    Divider,
    Link,
    Box,
    Button,
    Input,
    InputGroup,
    InputLeftElement,
    HStack,
    Radio, RadioGroup,
    NumberInput, NumberInputField, propNames
} from '@chakra-ui/react';
import {
    FiHome,
    FiPieChart,
    FiDollarSign,
    FiBox,
    FiCalendar,
    FiChevronDown,
    FiChevronUp,
    FiPlus,
    FiCreditCard,
    FiSearch,
    FiBell,
    FiWifi
} from 'react-icons/fi';
import { MdWifi, MdClose } from 'react-icons/md';
import { Formik, Form, Field } from 'formik';
import MyChart from '../components/myChart'

export default function Dashboard() {
    const [display, changeDisplay] = useState('hide');
    const [value, changeValue] = useState(1);
    const [quickBuy, changeQuickBuy] = useState(null);
    return (
        <Flex
            h='100vh'
            flexDir='row'
            overflow='hidden'
            // maxW='2000px'
        >
            {/* column 1 */}
            <Flex 
                w='15%'
                flexDir='column'
                alignItems='center'
                backgroundColor='#020202'
                color='#fff'
            >
                <Flex
                    flexDir='column'
                    justifyContent='space-between'
                    h="100vh"
                >
                    <Flex
                        flexDir='column'
                        as='nav'
                    >
                        <Heading 
                            mt={50}
                            mb={100}
                            fontSize='4xl'
                            alignSelf='center'
                            letterSpacing={'tight'} 
                        >
                            StokEx
                        </Heading>
                        <Flex
                            flexDir='column'
                            align='flex-start'
                            justifyContent={'center'}
                        >
                            <Flex className='sidebar-items'>
                                <Link>
                                    <Icon as={FiHome} fontSize='2xl' className='active-icon' />
                                </Link>
                                <Link _hover={{ textDecor: 'none' }}>
                                    <Text className='active'>Home</Text>
                                </Link>
                            </Flex>
                            <Flex className='sidebar-items'>
                                <Link>
                                    <Icon as={FiPieChart} fontSize='2xl' />
                                </Link>
                                <Link _hover={{ textDecor: 'none' }}>
                                    <Text>Credit</Text>
                                </Link>
                            </Flex>
                            <Flex className='sidebar-items'>
                                <Link>
                                    <Icon as={FiDollarSign} fontSize='2xl' />
                                </Link>
                                <Link _hover={{ textDecor: 'none' }}>
                                    <Text>Wallet</Text>
                                </Link>
                            </Flex>
                            <Flex className='sidebar-items'>
                                <Link>
                                    <Icon as={FiBox} fontSize='2xl' />
                                </Link>
                                <Link _hover={{ textDecor: 'none' }}>
                                    <Text>Services</Text>
                                </Link>
                            </Flex>
                        </Flex>
                    </Flex>

                    <Flex flexDir="column" alignItems="center" mb={10} mt={5}>
                        <Avatar my={2} src="avatar-1.jpg" />
                        <Text>Maysie Sim</Text>
                    </Flex>
                </Flex>
            </Flex>

            {/* column 2 */}
            <Flex
                w={quickBuy===null ? '90%' : '55%'}
                p={'3%'}
                flexDir='column'
                overflow={'auto'}
                minH="100vh"
            >
                <Heading fontWeight={'normal'} mb={4} letterSpacing='tight'>Welcome back, <Flex fontWeight={'bold'} display='inline-flex'>Maysie</Flex></Heading>
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
                                <Text fontWeight={'bold'} fontSize='2xl'>$5,750.29</Text>
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
                                <Text fontWeight={'bold'} fontSize='2xl'>$771.82</Text>
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
                                {display == 'show' &&
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
                            <IconButton icon={display == 'show' ? <FiChevronUp /> : <FiChevronDown />} 
                                onClick={() => {
                                    if (display == 'show') {
                                        changeDisplay('none');
                                    } else {
                                        changeDisplay('show');
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
                                {display == 'show' &&
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
                            <IconButton icon={display == 'show' ? <FiChevronUp /> : <FiChevronDown />} 
                                onClick={() => {
                                    if (display == 'show') {
                                        changeDisplay('none');
                                    } else {
                                        changeDisplay('show');
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
                            {/* <FormLabel htmlFor='ticker'>Ticker</FormLabel>
                            <Input id='ticker' type='text' disabled>{quickBuy}</Input> */}
                    </Flex>

                    {/* quickbuy form */}
                </Flex>
        }
            </Flex>
    );
}