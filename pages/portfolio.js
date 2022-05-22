import { Flex, Heading } from '@chakra-ui/react'
import SideBar from '../components/sidebar';
import PortfolioView from '../components/viewPortfolio';

import { useState, useContext } from 'react';
import TabContext from '../contexts/TabContext';
import SessionContext from '../contexts/SessionContext';

const Portfolio = () => {
    const [activeTab, changeActiveTab] = useState("portfolio");
    const value = { activeTab, changeActiveTab };
    const { sessionKey, appRouter }= useContext(SessionContext);

    async function getData() {
        console.log(">>> sessionKey: " + sessionKey);
        if (!sessionKey) {
            appRouter.push("/");
            return;
        }
        const ENDPOINT = process.env.NEXT_PUBLIC_CMS_HOST + process.env.NEXT_PUBLIC_CMS_PORTFOLIO_ENDPOINT;
        const response = await axios({
            url: ENDPOINT,
            method:'get',
            headers: {
                'x-session-key': sessionKey
            }
        })
        if (response.status !== 200) {
            appRouter.push("/");
        }
        return response.data;
    }
    
    const propData = getData().then((resp) => {
        console.log(resp);
        return resp;
    })
    
    console.log(propData);
    return (
        <TabContext.Provider value={value}>
        <SideBar>
        <PortfolioView />
        </SideBar>
        </TabContext.Provider>
        )
    };
    
    export default Portfolio;