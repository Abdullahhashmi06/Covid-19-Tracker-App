import React from 'react';
import { Grid} from '@material-ui/core';
import { CountryPicker, InfoCard, MapBox } from '../../Components';
import styles from '../../App.module.css';

function Home({country, hcc, fd}) {
    return (
        <>
          <Grid container>
            <Grid item sm={12} md={6} className={styles.mt80}>
              <MapBox country={country} moreData={fd}/>
            </Grid>

          <Grid item  className={`${styles.countryGrid} ${styles.mt80}`} item sm={12} md={6}>
            <div className={styles.divCount}>
              <CountryPicker handleCountryChange={hcc} />
            </div>
            <InfoCard country={country} />
          </Grid>
          </Grid>            
        </>
    )
}

export default Home
