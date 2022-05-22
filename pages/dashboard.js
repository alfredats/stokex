import SideBar from '../components/sidebar';
import DashHome from '../components/viewDashboard';

import { useState } from 'react';
import TabContext from '../contexts/TabContext';

export default function Dashboard({ children }) {
    const [activeTab, changeActiveTab] = useState("home");
    const value = { activeTab, changeActiveTab };
    return (
        <TabContext.Provider value={value}>
            <SideBar>
                <DashHome />
            </SideBar>
        </TabContext.Provider>
        );
    }