import { createContext } from 'react';

const SessionContext = createContext({
    sessionKey: '',
    setSessKey: () => {}
}); 

export default SessionContext;