import { ChakraProvider } from '@chakra-ui/react';
import '../styles/globals.css';
import SessionContext from '../contexts/SessionContext';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [sessKey, setSessKey] = useState('');
  const session = {
    sessionKey: sessKey,
    setSessKey
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
