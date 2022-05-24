import {
    Tr, Td, Heading, Text, Button 
} from '@chakra-ui/react'
import axios from 'axios';
import { useContext, useState } from 'react';

import SessionContext from '../contexts/SessionContext';

const prettyPrintDate = (date) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dateStr = date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear(); 
    const timeStr = date.getHours() + ':' + date.getMinutes();
    return dateStr + ', ' + timeStr;
}

export default function OrderTableRow(props) {
    const { appRouter } = useContext(SessionContext);
    const OrderType = {1: 'Bid', 2: 'Ask'};
    const OrderStatus = {
        10: 'Created', 19: 'Partially Fulfilled', 20: 'Fulfilled',
        90: 'Cancelled' }
    
    const createdParsed = new Date(props.created);
    const updatedParsed = new Date(props.updated);
    const [ cancelOverlay, setCancelOverlay ] = useState(false);
    const [ errorMsg, setErrorMsg ] = useState();

    function cancelOrder(orderID) {
        const ENDPOINT = process.env.NEXT_PUBLIC_CMS_HOST + process.env.NEXT_PUBLIC_CMS_ORDERCANCEL_ENDPOINT + orderID;
        console.log(">>> order cancel endpoint: " + ENDPOINT);
        axios({
            url: ENDPOINT,
            method: 'get',
            headers: {
                'x-session-key': window.localStorage.getItem("sessionKey")
            }
        }).then((response) => {
            appRouter.push("/portfolio");
        }).catch((error) => {
           setErrorMsg("Failed to cancel order, please try again ");
        })
    }

    return (
            <>
            <Tr className='stockTableRow' 
                onClick={() => {
                    setCancelOverlay(!cancelOverlay);
                    setErrorMsg(null);
                }}
                backgroundColor={ cancelOverlay ? 'gray.100' : 'white'}
            >
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
            { cancelOverlay && props.type != 'completed' &&
                    <Tr className='stockTableRow'
                        backgroundColor={ cancelOverlay ? 'gray.100' : 'white'}
                        m='-5'
                    >
                        <Td p='1'></Td>
                        <Td p='1'></Td>
                        <Td p='1'></Td>
                        <Td p='1'></Td>
                        <Td p='1'></Td>
                        <Td p='1'>
                            <Text color = 'red'>{errorMsg}</Text>
                        </Td>
                        <Td p='1'
                        pl='4'>
                            <Button
                                mb='1'
                                colorScheme='red'
                                type='submit'
                                onClick={() => {
                                    console.log(props.orderId);
                                    cancelOrder(props.orderId);
                                }}
                            >
                                Cancel Order
                            </Button>
                        </Td>
                    </Tr>
            }
            </>
    )
}