import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

// import all reducers here
import storiesReducer from './storiesReducer';


// combine reducers
// reducers is a FUNCTION
const reducers = combineReducers({
  // if we had other reducers, they would go here
  stories: storiesReducer,
  form: formReducer
});

// make the combined reducers available for import
export default reducers;

