import { 
    Flex,
    Table, Thead, Tbody, Tr, Th, Td,
    Text, Heading,
    Divider,
    IconButton
} from '@chakra-ui/react';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';
import { useState } from 'react';

import StockTableRow from './StockTableRow';


export default function StockTable(props) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const date= new Date();

    const dateString = date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear();
    if (!props) { return <Text letterSpacing='tight'>Error loading stock table</Text>}
    const [tableExtra, changeTableExtra] = useState('hide');
    console.log(props);

    return (
        <>
        <Flex justifyContent={'space-between'} mt={8}>
            <Flex align={'flex-end'}>
                <Heading as='h2' size='lg' letterSpacing='tight'>{props.title}</Heading>
                <Text fontSize='sm' color='gray' ml={4}>{dateString}</Text>
            </Flex>
        </Flex>
        <Flex flexDir='column'>
            <Flex overflow='auto'>
                <Table variant='unstyled' mt={4}>
                    <Thead>
                        <Tr>
                            <Th>Symbol</Th>
                            <Th>Sector</Th>
                            <Th>Current price</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {props.tableData.slice(0,5).map((rowData) => {
                            return <StockTableRow {...rowData} />
                        })}
                    { tableExtra == 'show' && 
                        <>
                        {props.tableData.slice(5).map((rowData) => {
                            return <StockTableRow {...rowData} />
                        })}
                        </>
                    }
                    
                    </Tbody>
                </Table>
            </Flex>
        </Flex>
        <Flex align='center'>
            <Divider />
            <Flex>
                <IconButton icon={tableExtra == 'show' ? <FiChevronUp /> : <FiChevronDown />} 
                    onClick={() => {
                        if (tableExtra == 'show') {
                            changeTableExtra('hide');
                        } else {
                            changeTableExtra('show');
                        }
                    }}
                />
            </Flex>
            <Divider />
        </Flex>
    </>
    )
}