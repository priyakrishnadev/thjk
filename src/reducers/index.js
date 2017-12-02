import { combineReducers } from 'redux'
import auth from './auth'
import productComments from './productComments'
import categoryReducer from './categoryReducer'
import { reducer as reduxFormReducer } from 'redux-form';

const rootReducer = combineReducers({
  auth,
  productComments,
  category: categoryReducer,
  form: reduxFormReducer
});

export default rootReducer
