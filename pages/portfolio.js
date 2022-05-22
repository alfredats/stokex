import SideBar from '../components/sidebar';
import PortfolioView from '../components/viewPortfolio';

import { useState } from 'react';
import TabContext from '../contexts/TabContext';

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