import { Flex, Heading } from '@chakra-ui/react'
import SideBar from '../components/sidebar';
import PortfolioView from '../components/viewPortfolio';
import TabContext from '../components/TabContext';
import { useState } from 'react';

const Portfolio = () => {
    const [activeTab, changeActiveTab] = useState("portfolio");
    const value = { activeTab, changeActiveTab };
    return (
        <TabContext.Provider value={value}>
        <SideBar>
            <PortfolioView />
        </SideBar>
        </TabContext.Provider>
    )
};

export default Portfolio;