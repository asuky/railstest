import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';

import ReservationButton from './ReservationButton';

const styles = (theme) => {

};

class ReservationList extends Component {

    state = {
        dense: false,
        secondary: false,
    };

    render(){
        let rows = [];

        for (let idx in this.props.list) {

            rows[idx] = [
                idx,
                this.props.list[idx].resname,
                this.props.list[idx].resdesc,
                this.props.list[idx].posdate,
                this.props.list[idx].subid,
                this.props.list[idx].dateid
            ];
        }

        return(
            <table>
                <thead>
                    <tr>
                        <th>店名</th>
                        <th>メニュー</th>
                        <th>日程</th>
                        <th>予約可否</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        rows.map(row => {
                            return (
                                <tr>
                                    <td>{row[1]}</td>
                                    <td>{row[2]}</td>
                                    <td>{row[3]}</td>
                                    <td>
                                        <ReservationButton 
                                            subid={row[4]}
                                            dateid={row[5]}
                                            onPrepareReservation={ this.props.onPrepareReservation }/>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        );
    }
}

export default withStyles(styles)(ReservationList);