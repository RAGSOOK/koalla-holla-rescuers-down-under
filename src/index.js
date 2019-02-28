import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';
import logger from 'redux-logger';

import rootReducer from '../src/redux/reducers/';

function* rootSaga() {
    yield takeEvery('GET_KOALAS', fetchKoalas);
    yield takeEvery('ADD_KOALA', addKoala);
    yield takeEvery('PREPARE_KOALA', prepareKoala);
    yield takeEvery('DELETE_KOALA', deleteKoala);
}

//Fetch Koal Saga
function* fetchKoalas() {
    try{
        const koalas = yield axios.get('/api/koala');
        console.log(koalas);  
        yield put({type: 'SET_KOALAS', payload: koalas.data});
    }catch(error){
        alert('something went wrong');
        yield console.log('error in fetchKoalas', error);   
    }
}
//End Fetch

//Post Koal Saga
function* addKoala(action) {
    try {
        yield axios.post('/api/koala', action.payload);
        yield put({ type: 'GET_KOALAS' });
    } catch (error) {
        const errorMessage = `Unable to add koala. Error in addKoala saga. ${error}`;
        alert(errorMessage);
        console.log(errorMessage);
    }
}
//End Post

//Put Koal Saga
function* prepareKoala(action) {
    try {
        yield axios.put(`/api/koala/${action.payload._id}`);
        yield put({ type: 'GET_KOALAS' });
    } catch (error) {
        const errorMessage = `Unable to prepare koala. Error in prepareKoala saga. ${error}`;
        alert(errorMessage);
        console.log(errorMessage);
    }
}
//End Put

//Delete Koal Saga
function* deleteKoala(action) {
    try {
        yield axios.delete(`/api/koala/${action.payload._id}`);
        yield put({ type: 'GET_KOALAS' });
    } catch (error) {
        const errorMessage = `Unable to delete koala. Error in deleteKoala saga. ${error}`;
        alert(errorMessage);
        console.log(errorMessage);
    }
}
//End Delete

    
const sagaMiddleware = createSagaMiddleware();

// Create one store that all components can use
const storeInstance = createStore(
    // Add sagaMiddleware to our store
    rootReducer,
    applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);


// ReactDOM.render(<App />, document.getElementById('react-root'));

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('react-root'));