import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import { createStore, applyMiddleware } from "redux"
import { Provider } from 'react-redux'
import thunk from "redux-thunk"
import combineReducers from './reducers/rootReducer'
import App from './App'

const store = createStore(combineReducers, applyMiddleware(thunk))

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);