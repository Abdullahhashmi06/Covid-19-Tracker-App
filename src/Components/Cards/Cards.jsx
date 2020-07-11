import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
// import cx from 'classnames';

import styles from './Cards.module.css';

const Cards = ({ data: {confirmed, recovered, deaths, lastUpdate} }) => {
    if(!confirmed){
        return 'Loading ...';
    }
    return (
      <div className={styles.container}>
        <Grid container spacing={4} justify="center">
          <Grid item xs={12} md={12}>
            <div className={styles.div} id={styles.infected}>
              <Typography color="textSecondary" gutterBottom>
                Infected : <small><em>Last Update {new Date(lastUpdate).toDateString()}</em></small>
              </Typography>
              <Typography variant="h5" component="h2">
                <CountUp start={0} end={confirmed.value} duration={2.75} separator="," />
              </Typography>
              {/* <Typography variant="body2" component="p">
                Number of active cases of COVID-19.
              </Typography> */} 
            </div>
          </Grid>
          <Grid item xs={12} md={12}>
            <div className={styles.div} id={styles.recovered}>
              <Typography color="textSecondary" gutterBottom>
                Recovered
              </Typography>
              <Typography variant="h5" component="h2">
                <CountUp start={0} end={recovered.value} duration={2.75} separator="," />
              </Typography>
              <Typography color="textSecondary">
                {new Date(lastUpdate).toDateString()}
              </Typography>
                          {/*
              <Typography variant="body2" component="p">
                Number of recoveries 
              </Typography> */}
            </div>
          </Grid>
          <Grid item xs={12} md={12}>
            <div className={styles.div} id={styles.deaths}>
              <Typography color="textSecondary" gutterBottom>
                Deaths
              </Typography>
              <Typography variant="h5" component="h2">
                <CountUp start={0} end={deaths.value} duration={2.75} separator="," />
              </Typography>
              <Typography color="textSecondary">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              {/* <Typography variant="body2" component="p">
                Number of deaths caused by COVID-19.
              </Typography> */}
            </div>
          </Grid>
          <Grid item xs={12} md={12}>
            <div className={styles.div}>
              <Typography color="textSecondary" gutterBottom>
                Closed Cases
              </Typography>
              <Typography variant="h5" component="h2">
                <CountUp start={0} end={deaths.value + recovered.value} duration={2.75} separator="," />
              </Typography>
              <Typography color="textSecondary">
                {new Date(lastUpdate).toDateString()}
              </Typography> 
            </div>
          </Grid>
          
        </Grid>
      </div>
    )
}

export default Cards;
