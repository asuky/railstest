import React, { Component } from 'react';

class ReservationButton extends Component {

    render() {

        if (this.props.subid !== null) {
            return(<div>予約不可</div>);
        }

        return(
            <div>
                <button onClick={ e => this.props.onPrepareReservation(e, this.props.dateid)}>予約する</button></div>);
    }
}

export default ReservationButton;