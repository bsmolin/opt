import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import App from './components/App'
import rootReducer from './reducers/rootReducer'

const store = configureStore({
  reducer: rootReducer
})

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)