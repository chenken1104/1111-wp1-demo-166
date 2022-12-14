import React, { useState, useContext, useReducer, useEffect } from 'react';
import Reducer_66 from './Reducer_66';

import cartItems from './data';

const AppContext_66 = React.createContext();

const initialState = {
  loading: false,
  cart: cartItems,
  amount: 0,
  total: 0,
}

const AppProvider_66 = ({children}) => {
  const [state, dispatch] = useReducer(Reducer_66, initialState);
  return <AppContext_66.Provider value={{...state}}>
     {children}
  </AppContext_66.Provider>
};

const useGlobalContext_66 = () => {
  return useContext(AppContext_66);
}

export { AppProvider_66, useGlobalContext_66 };
