import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';
import logger from 'redux-logger';

function* rootSaga() {
    // yield takeEvery('FETCH_FRUITS', fruitFetcher);
    // yield takeEvery('POST_FRUITS', PostfruitFetcher);
    yield takeEvery('GET_KOALAS', fetchKoalas);
    yield takeEvery('ADD_KOALA', addKoala);
}

//Fetch Koal Saga
function* fetchKoalas() {
    try{
        const koalas = axios.get('/api/koala');
        console.log(koalas);  
        yield put({type: 'SET_KOALAS', payload: koalas});
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
        // yield put({ type: 'FETCH_KOALAS' });
    } catch (error) {
        const errorMessage = `Unable to add koala. Error in addKoala saga. ${error}`;
        alert(errorMessage);
        console.log(errorMessage);
    }
}
//End Post

//Put Koal Saga

//End Put

//Delete Koal Saga

//End Delete

//Koal that exist Reducer

// End Reducer
    
const sagaMiddleware = createSagaMiddleware();

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        // basketReducer,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);


// ReactDOM.render(<App />, document.getElementById('react-root'));

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('react-root'));