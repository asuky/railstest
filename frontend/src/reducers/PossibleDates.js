import {
    LIST_RESERVATIONS, PREPARE_RESERVATION
} from '../actions/actions';

const initialState = {
    list: false,
    dateid: false
}

export function PossibleDates (state = initialState, action) {
    switch (action.type) {
        case LIST_RESERVATIONS:
            return Object.assign({}, state, {
                list: action.payload.list
            });
        case PREPARE_RESERVATION:
            return Object.assign({}, state, {
                dateid: action.payload.dateid
            });
        default:
            return state;
    }
}