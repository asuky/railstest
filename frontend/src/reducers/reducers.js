import { combineReducers } from 'redux';

import { PossibleDates } from './PossibleDates';
import { ReservationForm } from './ReservationForm';

const rootReducer = combineReducers({
    PossibleDates,
    ReservationForm
});

export default rootReducer;