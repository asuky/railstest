import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/reducers';
import allSagas from './sagas/allsagas';

import { getReservations,
        prepareReservation,
        postReservation,
        updateField } from './actions/actions';

import MainUI from './components/MainUI';

import './css/main.css';

const sagaMiddlewares = createSagaMiddleware();
const logger = createLogger();
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddlewares, logger)
);

sagaMiddlewares.run(allSagas);

function mapStateToProps(state) {
    return {
        list: state.PossibleDates.list,
        dateid: state.PossibleDates.dateid
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateField: (property, value) => { 
            dispatch(updateField(property, value));
        },

        onPrepareReservation: (e, resid) => {
            dispatch(prepareReservation(resid))
        },

        onPostReservation: () => {
            dispatch(postReservation())
        }
    }
}

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MainUI);

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById('root')
);


store.dispatch(getReservations());