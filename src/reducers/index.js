import { combineReducers } from 'redux';
import Login from "./Login";
import CheckOfflineReducer from './CheckOfflineReducer';
import CatsDataReducer from './CatsDataReducer';
export default combineReducers({
    login: Login,
    checkOfflineFeature:CheckOfflineReducer,
    catsData:CatsDataReducer
})