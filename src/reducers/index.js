import {combineReducers} from 'redux';
import {createStore, applyMiddleware} from 'redux';
import reposReducer from "./repoReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    repos: reposReducer,
})
export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))