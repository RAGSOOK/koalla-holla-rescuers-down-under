import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

function* rootSaga() {
    // yield takeEvery('FETCH_FRUITS', fruitFetcher);
    // yield takeEvery('POST_FRUITS', PostfruitFetcher);
}

//Fetch Koal Saga

//End Fetch

//Post Koal Saga

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