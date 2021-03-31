import React from 'react';
import Main from './components/MainComponent';
import { ConfigureStore } from './redux/configureStore';
import { PersistGate } from 'redux-persist/es/integration/react';

const { persistor } = ConfigureStore();

export default function App() {
  return (
    <PersistGate
      persistor={persistor}
    >
      <Main />
    </PersistGate>
  );
}


