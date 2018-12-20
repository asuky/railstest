import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';

import Waiting from './Waiting';
import ReservationList from './ReservationList';
import ReservationForm from './ReservationForm';

const styles = (theme) => {

};

class ReservationStatus extends Component {

    render() {
        if (this.props.list === false && this.props.dateid === false) {
            return(<Waiting />);
        } else if (this.props.dateid !== false) {
            return(<ReservationForm
                    dateid={ this.props.dateid }
                    onPostReservation={ this.props.onPostReservation } 
                    updateField={ this.props.updateField } />);
        } else{
            return(<ReservationList
                    list={this.props.list}
                    onPrepareReservation={ this.props.onPrepareReservation } />);
        }
    }
}

export default withStyles(styles)(ReservationStatus);