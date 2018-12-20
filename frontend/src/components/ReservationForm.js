import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => {

};

class ReservationForm extends Component {

    onNameChange(event) {
        this.props.updateField("name", event.target.value);
    }

    onEmailChange(event) {
        this.props.updateField("mailaddr", event.target.value);
    }

    onTelChange(event) {
        this.props.updateField("tel", event.target.value);
    }

    render() {
        console.log(this.props);
        return(
            <div>
                <section>
                    <h1>予約する</h1>
                    <table>
                        <tr>
                            <td><label>名前</label></td>
                            <td><input type="text" name="name" onChange={ (e) => this.onNameChange(e) }></input></td>
                        </tr>
                        <tr>
                            <td><label>メールアドレス</label></td>
                            <td><input type="email" name="mailaddr" onChange={ (e) => this.onEmailChange(e) }></input></td>
                        </tr>
                        <tr>
                            <td><label>電話番号</label></td>
                            <td><input type="tel" name="tel" onChange={ (e) => this.onTelChange(e) }></input></td>
                        </tr>
                        <tr>
                            <td><button onClick={ (e) => this.props.onPostReservation(e) }>申し込む</button></td>
                        </tr>
                    </table>
                </section>
            </div>
            );
    }
}

export default withStyles(styles)(ReservationForm);