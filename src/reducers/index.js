import { combineReducers } from 'redux';
import commonReducer from '../storeManager/userAuthentication/reducers';
// import modalReducer from '../storeManager/modal/reducers';

const reducer = combineReducers({
    commonReducer,
    // modalReducer
});

export default reducer;