import {
    Flex, 
    Box,
    Heading, Text,
    Icon, IconButton,
    Table, Thead, Tbody, Tr, Th, Td,
    Divider
} from '@chakra-ui/react'
import { FiChevronUp, FiChevronDown, FiCalendar } from 'react-icons/fi';
import MyChart from "./myChart";
import { useState } from 'react';


export default function PortfolioView() {
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
                                    <Text color='gray' fontSize='sm'>Percentage Change (1 month)</Text>
                                    <Text fontWeight={'bold'} fontSize='2xl' color='green'>+ 3.23%</Text>
                                </Flex>
                            </Flex>
                        </Box>
                    </Flex>
            
                    <Flex mt={'5'}>
                        <MyChart />
                    </Flex>
                </Flex>
                <Divider mt={'8'} />

                {/* order info */}
                <Flex justifyContent={'space-between'} mt={8}>
                    <Flex align={'flex-end'}>
                        <Heading as='h2' size='lg' letterSpacing='tight'>Orders</Heading>
                    </Flex>
                </Flex>
                <Flex flexDir='column'>
                    <Flex overflow='auto'>
                        <Table variant='unstyled' mt={4}>
                            <Thead>
                                <Tr>
                                    <Th hidden='true'>OrderID</Th>
                                    <Th>Type</Th>
                                    <Th>Ticker</Th>
                                    <Th isNumeric>Price</Th>
                                    <Th isNumeric>Quantity</Th>
                                    <Th>Status</Th>
                                    <Th>Created</Th>
                                    <Th>Updated</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr className='stockTableRow'>
                                    <Td hidden>1</Td>
                                    <Td>Bid</Td>
                                    <Td>
                                        <Flex>
                                            <Flex flexDir={'column'} >
                                                <Heading size='sm' letterSpacing={'tight'}>AAPL</Heading>
                                                <Text fontSize='sm' color='gray'>Apple Inc.</Text>
                                            </Flex>
                                        </Flex>
                                    </Td>
                                    <Td>
                                        <Text>$160.01</Text>
                                    </Td>
                                    <Td>
                                        <Text isNumeric>10</Text>
                                    </Td>
                                    <Td>
                                        Created
                                    </Td>
                                    <Td>
                                        2022-01-01 08:10:55
                                    </Td>
                                    <Td>
                                        2022-05-13 12:10:55
                                    </Td>
                                </Tr>
                                <Tr className='stockTableRow'>
                                    <Td>Bid</Td>
                                    <Td>
                                        <Flex>
                                            <Flex flexDir={'column'} >
                                                <Heading size='sm' letterSpacing={'tight'}>AAPL</Heading>
                                                <Text fontSize='sm' color='gray'>Apple Inc.</Text>
                                            </Flex>
                                        </Flex>
                                    </Td>
                                    <Td>
                                        <Text>$160.01</Text>
                                    </Td>
                                    <Td>
                                        <Text isNumeric>10</Text>
                                    </Td>
                                    <Td>
                                        Created
                                    </Td>
                                    <Td>
                                        2022-01-01 08:10:55
                                    </Td>
                                    <Td>
                                        2022-05-13 12:10:55
                                    </Td>
                                </Tr>
                                { showActive == 'show' &&
                                    <>
                                <Tr className='stockTableRow'>
                                    <Td>Bid</Td>
                                    <Td>
                                        <Flex>
                                            <Flex flexDir={'column'} >
                                                <Heading size='sm' letterSpacing={'tight'}>AAPL</Heading>
                                                <Text fontSize='sm' color='gray'>Apple Inc.</Text>
                                            </Flex>
                                        </Flex>
                                    </Td>
                                    <Td>
                                        <Text>$160.01</Text>
                                    </Td>
                                    <Td>
                                        <Text isNumeric>10</Text>
                                    </Td>
                                    <Td>
                                        Created
                                    </Td>
                                    <Td>
                                        2022-01-01 08:10:55
                                    </Td>
                                    <Td>
                                        2022-05-13 12:10:55
                                    </Td>
                                </Tr>
                                <Tr className='stockTableRow'>
                                    <Td>Bid</Td>
                                    <Td>
                                        <Flex>
                                            <Flex flexDir={'column'} >
                                                <Heading size='sm' letterSpacing={'tight'}>AAPL</Heading>
                                                <Text fontSize='sm' color='gray'>Apple Inc.</Text>
                                            </Flex>
                                        </Flex>
                                    </Td>
                                    <Td>
                                        <Text>$160.01</Text>
                                    </Td>
                                    <Td>
                                        <Text isNumeric>10</Text>
                                    </Td>
                                    <Td>
                                        Created
                                    </Td>
                                    <Td>
                                        2022-01-01 08:10:55
                                    </Td>
                                    <Td>
                                        2022-05-13 12:10:55
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
                            <IconButton icon={ showActive == 'show' ? <FiChevronUp /> : <FiChevronDown />} 
                                onClick={() => {
                                    if ( showActive == 'show') {
                                        changeShowActive('hide');
                                    } else {
                                        changeShowActive('show');
                                    }
                                }}

                            />
                        </Flex>
                        <Divider />
                    </Flex>
                </Flex>
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