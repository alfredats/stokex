import { createContext } from 'react';

const TabContext = createContext({
  activeTab: 'home',
  changeActiveTab: () => {}
});

export default TabContext;