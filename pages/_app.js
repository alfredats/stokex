import { ChakraProvider } from '@chakra-ui/react';
import '../styles/globals.css';
import SessionContext from '../contexts/SessionContext';
import { useState } from 'react';
import { Router, useRouter } from 'next/router';
import TabContext from '../contexts/TabContext';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [sessKey, setSessKey] = useState('');
  const session = {
    sessionKey: sessKey,
    setSessKey,
    appRouter: router
  }
  return (
    <ChakraProvider>
      <SessionContext.Provider value={session} >
        <Component {...pageProps} />
      </SessionContext.Provider>
    </ChakraProvider>
  )
}

export default MyApp
