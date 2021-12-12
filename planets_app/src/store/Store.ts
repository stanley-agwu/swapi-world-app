import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import RootReducer from '../reducers/RootReducer';
import thunk from 'redux-thunk';

const Store = createStore( RootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default Store;