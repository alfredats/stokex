import {
    Tr, Td, Heading, Text
} from '@chakra-ui/react'

const prettyPrintDate = (date) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const dateStr = date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear(); 
    const timeStr = date.getHours() + ':' + date.getMinutes();
    return dateStr + ', ' + timeStr;
}

export default function OrderTableRow(props) {
    const OrderType = {1: 'Bid', 2: 'Ask'};
    const OrderStatus = {
        10: 'Created', 19: 'Partially Fulfilled', 20: 'Fulfilled',
        90: 'Cancelled' }
    
    const createdParsed = new Date(props.created);
    const updatedParsed = new Date(props.updated);

    return (
            <Tr className='stockTableRow'>
                <Td hidden>{props.orderId}</Td>
                <Td>{OrderType[props.orderType]}</Td>
                <Td>
                    <Heading size='sm' letterSpacing={'tight'}>{props.ticker}</Heading>
                </Td>
                <Td>
                    <Text>${props.price}</Text>
                </Td>
                <Td>
                    <Text>{props.quantity}</Text>
                </Td>
                <Td>
                   {OrderStatus[props.orderStatus]} 
                </Td>
                <Td>
                    {prettyPrintDate(createdParsed)}
                </Td>
                <Td>
                    {prettyPrintDate(updatedParsed)}
                </Td>
            </Tr>
    )
}