import { put, call } from 'redux-saga/effects';
import axios from 'axios';

import { showReservationList } from '../actions/actions';

async function getReservationList() {
    return new axios({
        method: "GET",
        url: "/reservations/"
    }).then((response) => response.data);
}

export function* getReservations() {
    try {
        const reservationList = yield call(getReservationList);
        yield put(showReservationList(reservationList));
    } catch (error) {

    }
}