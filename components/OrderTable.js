import { 
    Flex,
    Table, Thead, Tbody, Tr, Th, Td,
    Text, Heading,
    Divider,
    IconButton
} from '@chakra-ui/react';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';
import { useState } from 'react';
import OrderTableRow from './OrderTableRow';


const SHOWMORE_SIZE = 3;

export default function OrderTable(props) {
    const [ showMore, changeShowMore ] = useState('hide');
    console.log(props);

    return (
            <>
            <Flex justifyContent={'space-between'} mt={8}>
                <Flex align={'flex-end'}>
                    <Heading as='h2' size='lg' letterSpacing='tight'>{props.title}</Heading>
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
                                <Th>Price</Th>
                                <Th>Quantity</Th>
                                <Th>Status</Th>
                                <Th>Created</Th>
                                <Th>Updated</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            { props.data.length >= SHOWMORE_SIZE && 
                                props.data.slice(0,SHOWMORE_SIZE).map((row,index) => {
                                    return <OrderTableRow type={props.type} key={index} {...row} />
                            })}
                            { props.data.length < SHOWMORE_SIZE &&
                                props.data.map((row,index) => {
                                    return <OrderTableRow type={props.type} key={index} {...row} />
                            })}
                            { props.data.length >= SHOWMORE_SIZE && showMore == 'show' &&
                                props.data.slice(SHOWMORE_SIZE).map((row,index) => {
                                    return <OrderTableRow type={props.type} key={index} {...row} />
                            })}
                        </Tbody>
                    </Table>
                </Flex>
                <Flex align='center'>
                    { props.data.length <= SHOWMORE_SIZE && 
                        <Divider />
                    }
                    { props.data.length > SHOWMORE_SIZE &&
                        <>
                        <Divider />
                        <Flex>
                            <IconButton icon={ showMore == 'show' ? <FiChevronUp /> : <FiChevronDown />} 
                                onClick={() => {
                                    if ( showMore == 'show') {
                                        changeShowMore('hide');
                                    } else {
                                        changeShowMore('show');
                                    }
                                }}

                            />
                        </Flex>
                        <Divider />
                        </>
                    }
                </Flex>
            </Flex>
            </>
    )
}