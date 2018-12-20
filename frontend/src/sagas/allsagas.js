import { takeEvery } from 'redux-saga/effects';
import { GET_RESERVATIONS, POST_RESERVATION } from '../actions/actions';
import { getReservations } from './getreservations';
import { postReservation } from './postreservation';

export function* allSagas() {
    yield takeEvery(GET_RESERVATIONS, getReservations);
    yield takeEvery(POST_RESERVATION, postReservation);
}

export default allSagas;