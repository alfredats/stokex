import SideBar from '../components/sidebar';
import DashHome from '../components/viewDashboard';

import axios from 'axios';

import { useContext, useEffect, useState } from 'react';
import QuickBuyContext from '../contexts/QuickBuyContext';
import SessionContext from '../contexts/SessionContext';


export default function Dashboard({ children }) {
    const { appRouter } = useContext(SessionContext);
    const [quickBuy, changeQuickBuy ] = useState(null);
    const [ data, setData ] = useState(null);
    const [ isLoading, setLoading ] = useState(false)

    useEffect(() => {
        setLoading(true);
        const sessionKey = window.localStorage.getItem("sessionKey");
        console.log(">>> sessionKey: " + sessionKey);

        if (!sessionKey) {
            appRouter.push("/");
            return;
        }
        const ENDPOINT = process.env.NEXT_PUBLIC_CMS_HOST + process.env.NEXT_PUBLIC_CMS_DASHBOARD_ENDPOINT;
        axios({
            url: ENDPOINT,
            method:'get',
            headers: {
                'x-session-key': sessionKey
            }
        }).then((response) => {
            setData(response.data);
            setLoading(false);
        }).catch((error) => {
            console.log(error);
            appRouter.push("/");
        })
    }, [appRouter])
    
    if (isLoading) { return <></> }
    if (!data) { return <></> }
    console.log(data);
    return (
        <SideBar activeTab='home' name={data.name} >
            <QuickBuyContext.Provider value={{quickBuy, changeQuickBuy}}>
                <DashHome data={data} />
            </QuickBuyContext.Provider>
        </SideBar>
        );
    }