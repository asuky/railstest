import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import ReservationStatus from './ReservationStatus';

const styles = (theme) => ({
    bottomNavigation: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
    },
    grow: {
        flexGrow: 1,
    },

    textFieldColor: {
        color: "#ffffff"
    },

    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    }
});


class MainUI extends Component {


    render() {
        const { classes } = this.props;
        console.log(this.props);
        return (
            <div>
                <AppBar position="static" color="primary">
                    <Toolbar variant="dense">
                        <Typography variant="h6" color="inherit" className={ classes.grow }>Reservation Demo</Typography>
                    </Toolbar>
                </AppBar>
                <Grid container spacing={24}>
                    <Grid item xs>
                        <Typography variant="h4" component="h2"></Typography>
                        <ReservationStatus 
                            list={ this.props.list }
                            dateid={ this.props.dateid }
                            onPrepareReservation={ this.props.onPrepareReservation }
                            onPostReservation={ this.props.onPostReservation }
                            updateField={ this.props.updateField } />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(MainUI);