import {
    UPDATE_FIELD
} from '../actions/actions';

const initialState = {
    name: "",
    mailaddr: "",
    tel: ""
}

export function ReservationForm (state = initialState, action) {
    switch (action.type) {
        case UPDATE_FIELD:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}