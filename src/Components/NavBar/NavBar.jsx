import React from 'react';
import {AppBar, Toolbar, Typography, Link, Grid } from '@material-ui/core';
import styles from './NavBar.module.css';

const NavBar = () =>{
    return(
        <div className={styles.root}>
            <AppBar className={styles.navBar}>
                <Toolbar>
                    <Link variant='button' className={styles.covidHead} to="/">
                        <Typography>COVID-O-METER By Abdullah Hashmi</Typography>
                    </Link>
                    <nav className={styles.nav}>
                        <Link href="/" className={styles.navLinks}>
                            <Typography>Home</Typography>
                        </Link>                        
                        <Link href="/countrycards" className={styles.navLinks}>
                            <Typography>Country Cards</Typography>
                        </Link>                                           
                    </nav>
                </Toolbar>
            </AppBar>           
        </div>
    )
}

export default NavBar;