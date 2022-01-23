import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

const middleware = [thunk];
const initialState = {};
const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
    )
export default store 
