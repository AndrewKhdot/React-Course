import { combineReducers, createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'

import { activeUserReducer } from './activeUserReducer';
import { usersReducer } from './usersReducer';

const rootReducer = combineReducers( {
    user: activeUserReducer,
    users: usersReducer
})
export const store = createStore(rootReducer, devToolsEnhancer());