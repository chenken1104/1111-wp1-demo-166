import React, { useState, useContext, useReducer, useEffect } from 'react';
import Reducer_66 from './Reducer_66';

import cartItems from './data';

const AppContext_66 = React.createContext();

const initialState = {
  loading: false,
  cart: cartItems,
  amount: 4,
  total: 999.9,
}

const AppProvider_66 = ({children}) => {
  const [state, dispatch] = useReducer(Reducer_66, initialState);

  useEffect(()=>{
    dispatch({ type: 'GET_TOTALS'});
  },[state.cart]);

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART'});
  }

  const increase = (id) => {
    dispatch({ type: 'INCREASE', payload: id });
  }

  const reduce = (id) => {
    dispatch({ type: 'REDUCE', payload: id });
  }

  return <AppContext_66.Provider value={{...state, clearCart, increase, reduce}}>
    {children}
  </AppContext_66.Provider>
};

const useGlobalContext_66 = () => {
  return useContext(AppContext_66);
}

export { AppProvider_66, useGlobalContext_66 };
