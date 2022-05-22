import SideBar from '../components/sidebar';
import DashHome from '../components/viewDashboard';

import { useState } from 'react';
import TabContext from '../contexts/TabContext';
import QuickBuyContext from '../contexts/QuickBuyContext';

export default function Dashboard({ children }) {
    const [activeTab, changeActiveTab] = useState("home");
    const [quickBuy, changeQuickBuy ] = useState(null);
    return (
        <TabContext.Provider value={{ activeTab, changeActiveTab }}>
            <SideBar>
                <QuickBuyContext.Provider value={{quickBuy, changeQuickBuy}}>
                    <DashHome />
                </QuickBuyContext.Provider>
            </SideBar>
        </TabContext.Provider>
        );
    }