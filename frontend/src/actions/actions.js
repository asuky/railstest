export const POST_RESERVATION='POST_RESERVATION';
export const PREPARE_RESERVATION='PREPARE_RESERVATION';
export const GET_RESERVATIONS='GET_RESERVATIONS';
export const LIST_RESERVATIONS='LIST_RESERVATIONS';

export const UPDATE_FIELD='UPDATE_FIELD';

export function postReservation() {
    return {
        type: POST_RESERVATION
    }
}

export function prepareReservation(dateid) {
    return {
        type: PREPARE_RESERVATION,
        payload: {
            dateid: dateid
        }

    }
}

export function getReservations() {
    return {
        type: GET_RESERVATIONS
    }
}

export function showReservationList(resList) {
    console.log("showReservationList");
    console.log(resList);
    return {
        type: LIST_RESERVATIONS,
        payload: {
            list: resList
        }
    }
}

export function updateField(property, value) {
    return {
        type: UPDATE_FIELD,
        payload: {
            [property]: value
        }
    }
}