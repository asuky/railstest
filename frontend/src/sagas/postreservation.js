import { select, put, call } from 'redux-saga/effects';
import axios from 'axios';

import { showReservationList } from '../actions/actions';

async function postUserData(state) {
    
    return new axios({
        method: "POST",
        url: "/subscribers/",
        data: {
            possible_date_id: state.PossibleDates.dateid,
            name: state.ReservationForm.name,
            mailaddr: state.ReservationForm.mailaddr,
            tel: state.ReservationForm.tel
        }
    }).then((response) => response.data);
}

export function* postReservation() {
    try {
        const state = yield select();
        const reservationList = yield call(postUserData,
            state);
        yield put(showReservationList(reservationList));
    } catch (error) {

    }
}