
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers'
import { createStore, applyMiddleware, compose } from 'redux'
const logger = store => next => action => {
    console.group(action.type)
    console.info('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    console.groupEnd(action.type)
    return result
  }
  
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  
  const store = createStore(
    reducer
  )
  
  console.log(store.getState())
 
  // Every time the state changes, log it
  // Note that subscribe() returns a function for unregistering the listener
  const unsubscribe = store.subscribe(() =>
    console.log(store.getState())
  )



  // Dispatch some actions
  store.dispatch({
    type:'ADD_POST',
    id:"23412341234",
    timestamp:"12341234fgg",
    title:"nihao",
    body:"xxixixixi",
    author:"wemngxuyabng",
    category:"eriefgb",
    voteScore:"10000",
    deleted:"False"
   })

  
   
  // Stop listening to state updates
  unsubscribe()
  
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
  registerServiceWorker()
  