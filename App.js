import * as React from 'react';
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './components/redux/reducers/rootReducer'

// load local modules
import Artisan from './components/auth/artisan'

const store = configureStore({
  reducer: rootReducer
})

function App() {
  return (
    <Provider store={store}>
      <Artisan />
    </Provider>
  );
}

export default App
