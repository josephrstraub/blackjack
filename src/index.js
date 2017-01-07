import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import App from './components/App'
import './index.css'

function hideAddressBar()
{
  if(!window.location.hash)
  {
      if(document.height < window.outerHeight)
      {
          document.body.style.height = (window.outerHeight + 50) + 'px'
      }

      setTimeout( function(){ window.scrollTo(0, 1); }, 50 )
  }
}

window.addEventListener("load", function(){ if(!window.pageYOffset){ hideAddressBar(); } } )
window.addEventListener("orientationchange", hideAddressBar )

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
