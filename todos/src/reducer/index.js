import { createStore, combineReducers } from 'redux' //combine all reducers
import { composeWithDevTools} from 'redux-devtools-extension' //middleware
import login from './login'
import LogOut from './logout'
import TASK from './task'

const reducers = combineReducers({ login, LogOut, TASK })
//store combine 
const store= ()=> {
    return createStore(reducers, composeWithDevTools());
}
export default store();