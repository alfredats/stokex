import {
    Flex,
    Heading,
    Avatar, 
    Text,
    Icon,
    Link,
} from '@chakra-ui/react';
import {
    FiHome,
    FiPieChart,
    FiLogOut
} from 'react-icons/fi';
import { useContext } from 'react';
import TabContext from '../contexts/TabContext';


export default function SideBar({ name, activeTab, children}) {
    return (
        <Flex
            h='100vh'
            flexDir='row'
            overflow='hidden'
            // maxW='2000px'
        >
            {/* Nav */}
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
                            <Flex
                                className='sidebar-items'
                            >
                                <Link
                                    href="/dashboard"
                                    _hover={{ textDecor: 'none' }} 
                                    display="flex"
                                >
                                    <Icon 
                                        as={FiHome} 
                                        fontSize='2xl' 
                                        className={(activeTab == 'home')? 'active-icon' : null } 
                                    />
                                    <Text 
                                        className={(activeTab == 'home')? 'active' : null } 
                                    >
                                        Home
                                    </Text>
                                </Link>
                            </Flex>
                            <Flex 
                                className='sidebar-items'
                            >
                                <Link 
                                    href="/portfolio"
                                    _hover={{ textDecor: 'none' }}
                                    display="flex"
                                >
                                    <Icon 
                                        as={FiPieChart} 
                                        fontSize='2xl' 
                                        className={(activeTab == 'portfolio')? 'active-icon' : null } 
                                        />
                                    <Text
                                        className={(activeTab == 'portfolio')? 'active' : null } 
                                    >
                                        Portfolio
                                    </Text>
                                </Link>
                            </Flex>
                            <Flex className='sidebar-items'>
                                <Link
                                    href="/" 
                                    _hover={{ textDecor: 'none'}}
                                    display="flex"
                                    onClick={() => { window.localStorage.removeItem("sessionKey"); }}
                                >
                                    <Icon 
                                        as={FiLogOut} 
                                        fontSize='2xl' 
                                    />
                                    <Text>Log off</Text>
                                </Link>
                            </Flex>
                        </Flex>
                    </Flex>

                    <Flex flexDir="column" alignItems="center" mb={10} mt={5}>
                        { name === 'Maysie Sim' && 
                            <Avatar my={2} src="avatar-1.jpg" />
                        }
                        { name == 'Claire Ang' &&
                            <Avatar my={2} src="avatar-2.jpg" />
                        }
                        { name == 'Gerald Tan' &&
                            <Avatar my={2} src="avatar-3.jpg" />
                        }
                        <Text>{name}</Text>
                    </Flex>
                </Flex>
            </Flex>
            {children}        
        </Flex>
    )
}
