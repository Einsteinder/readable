import React from 'react'
import { render } from 'react-dom'
import { createStore ,applyMiddleware,compose} from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'
import { BrowserRouter as Router} from "react-router-dom";
import thunk from 'redux-thunk';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)
render(
<Provider store={store}> 
   <Router>
    <App />  
    </Router>
  </Provider>,

  document.getElementById('root')
)
