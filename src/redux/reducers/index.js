import { combineReducers } from 'redux';
import setKoalas from './koalasReducer';

const rootReducer = combineReducers({
    setKoalas,
});

export default rootReducer;