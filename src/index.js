import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import rootReducer from './reducers'
import App from './components/App'
import './index.css'

const loggerMiddleware = createLogger()

let store = createStore(
	rootReducer,
	applyMiddleware(loggerMiddleware)
)

ReactDOM.render(
	<Provider store={store}>
  		<App />
  	</Provider>,
  	document.getElementById('root')
)
