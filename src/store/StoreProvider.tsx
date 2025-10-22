import React from 'react'
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './store';
import { Provider } from 'react-redux';

interface Outlet {
    children: React.ReactNode
}

function StoreProvider({ children }: Outlet) {
  return (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            {children}
        </PersistGate>
    </Provider>
  )
}

export default StoreProvider