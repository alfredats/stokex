import {
    Tr, Td,
    Heading,
    Flex, Text
} from '@chakra-ui/react';
import { useContext } from 'react';
import QuickBuyContext from '../contexts/QuickBuyContext';

export default function StockTableRow (props) {
    const { changeQuickBuy } = useContext(QuickBuyContext);
    return (
        <>
            <Tr className='stockTableRow' onClick={() => changeQuickBuy(`${props.ticker}`)}>
                <Td>
                    <Flex>
                        <Flex flexDir={'column'} >
                            <Heading size='sm' letterSpacing={'tight'}>{props.companyName}</Heading>
                            <Text fontSize='sm' color='gray'>{props.exchange.toUpperCase()}:{props.ticker.toUpperCase()}</Text>
                        </Flex>
                    </Flex>
                </Td>
                <Td>Technology</Td>
                <Td >
                    <Flex align={'center'}>
                        <Text isNumeric>${props.price}</Text>
                        <Text ml={2} fontSize='sm' color={'green'}>+0.3%</Text>
                    </Flex>
                </Td>
            </Tr>
        </>
    )
}