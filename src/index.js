import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import App from './components/App'
import './index.css'

window.addEventListener("load", function() {
  // Set a timeout...
  console.log("loaded")
  setTimeout(function(){
    // Hide the address bar!
    window.scrollTo(0, 64)
  }, 1)
})

const timeoutScheduler = store => next => action => {
  if (!action.meta || !action.meta.delay) {
    return next(action)
  }

  let p = new Promise((resolve, reject) => {
	  let timeoutId = setTimeout(
	    () => {
	    	next(action)
	    	resolve()
	    },
	    action.meta.delay
	  )
	  return timeoutId
  })

  return p
}

let store = createStore(rootReducer, composeWithDevTools(
	applyMiddleware(thunk, timeoutScheduler)
))

ReactDOM.render(
	<Provider store={store}>
  		<App />
  	</Provider>,
  	document.getElementById('root')
)
