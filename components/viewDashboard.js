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

import StockTable from './StockTable';

import SessionContext from '../contexts/SessionContext';
import QuickBuyContext from '../contexts/QuickBuyContext';
import axios from "axios";
import QuickBuyForm from './quickBuyForm';


export default function DashHome(props) {
    const { quickBuy, changeQuickBuy } = useContext(QuickBuyContext);
    console.log(props);

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
                <Heading fontWeight={'normal'} mb={4} letterSpacing='tight'>Welcome back, <Flex fontWeight={'bold'} display='inline-flex'>{props.data.name}</Flex></Heading>
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
                                <Text fontWeight={'bold'} fontSize='2xl'>${props.data.monies.portfolioValue}</Text>
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
                                <Text fontWeight={'bold'} fontSize='2xl'>${props.data.monies.availableFunds}</Text>
                            </Flex>
                        </Flex>
                    </Box>
                </Flex>
                <Divider mt={'8'}/>

                {/* watchlist */}
                <StockTable title="Your Watchlist" tableData={props.data.watchList} />
                <StockTable title="Market Summary" tableData={props.data.market} />
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
                    <QuickBuyForm />
                </Flex>
            }
        </Flex>
    )
}
