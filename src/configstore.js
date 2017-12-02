
import {createStore, applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import rootReducer from './reducers';
import { loadState,saveState } from './localStorage';
import throttle from 'lodash/throttle';
import setAuthorizationToken from './utils/setAuthorizationToken';
import {setCurrentUser} from './actions/AuthActions';

const configstore = () =>{
   const persistedState = loadState();
  const logger = createLogger();
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    // rootReducer,composeEnhancers(applyMiddleware(thunk, logger))
       rootReducer,persistedState,composeEnhancers(applyMiddleware(thunk, logger))
  );

  store.subscribe(() => {
    saveState({
      // upVotes:store.getState().upVotes
      productComments:store.getState().productComments
    });
  })

  return store;
};

export default configstore;
