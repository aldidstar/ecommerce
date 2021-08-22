import { combineReducers } from 'redux'
import items from './items'
import transaction from './transaction'


export default combineReducers({
    items, transaction
})