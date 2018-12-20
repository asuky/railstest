import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => {

};

class Waiting extends Component {
    render(){
        return(
            <div>
                <CircularProgress />
                <Typography component="p">予約状況取得中</Typography>
            </div>
        );
    }
}

export default withStyles(styles)(Waiting);