import SideBar from '../components/sidebar';
import DashHome from '../components/viewDashboard';
import { useContext, useState } from 'react';
import TabContext from '../contexts/TabContext';
import SessionContext from '../contexts/SessionContext';
import axios from 'axios';







export default function Dashboard({ children }) {
    const [activeTab, changeActiveTab] = useState("home");
    const value = { activeTab, changeActiveTab };
    const { sessionKey, setSessKey, appRouter } = useContext(SessionContext);
    
    async function getData() {
        console.log(">>> sessionKey: " + sessionKey);
        if (!sessionKey) {
            appRouter.push("/");
            return;
        }
        const ENDPOINT = process.env.NEXT_PUBLIC_CMS_HOST + process.env.NEXT_PUBLIC_CMS_DASHBOARD_ENDPOINT;
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
        return resp;
    })
    
    console.log(propData);
    
    return (
        <TabContext.Provider value={value}>
            <SideBar>
                <DashHome />
            </SideBar>
        </TabContext.Provider>
        );
    }