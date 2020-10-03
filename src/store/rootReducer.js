import { combineReducers } from 'redux';

import productReducer from '../redux/reducer';

const reducers = combineReducers({
    product: productReducer
})

export default reducers;
