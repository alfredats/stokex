import SideBar from '../components/sidebar';
import PortfolioView from '../components/viewPortfolio';

import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import SessionContext from '../contexts/SessionContext';

const Portfolio = () => {
    const { appRouter } = useContext(SessionContext);
    const [ data, setData ] = useState(null);
    const [ isLoading, setLoading ] = useState(false)
    useEffect(() => {
        setLoading(true);
        console.log(window.localStorage.getItem("sessionKey"));
        const sessionKey = window.localStorage.getItem("sessionKey");

        if (!sessionKey) {
            appRouter.push("/");
            return;
        }
        const ENDPOINT = process.env.NEXT_PUBLIC_CMS_HOST + process.env.NEXT_PUBLIC_CMS_PORTFOLIO_ENDPOINT;
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
    
    if (isLoading) { return <></>}
    if (!data) { return <></>}
    console.log(">>> portfolio page data");
    console.log(data);

    return (
        <SideBar activeTab='portfolio' name={data.name}>
            <PortfolioView {...data}/>
        </SideBar>
        )
    };
    
    export default Portfolio;