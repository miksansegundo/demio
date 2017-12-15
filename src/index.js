import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import 'bootstrap/dist/css/bootstrap.css';
import 'animate.css';
import App from './App'
import dataReducer from './redux/data.reducers'
const rootReducer = combineReducers({
  data: dataReducer
})
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk)
    //, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
