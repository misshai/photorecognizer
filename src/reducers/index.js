import { combineReducers } from 'redux';
import RecognizerReducer from './RecognizerReducer';

export default combineReducers({
    result: RecognizerReducer
});
