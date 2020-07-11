import React from 'react';
import {Link as RouterLnk} from 'react-router-dom';
import {AppBar, Toolbar, Typography, Link } from '@material-ui/core';
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
                        <Link component={RouterLnk} href="#" to="/" className={styles.navLinks}>
                            <Typography>Home</Typography>
                        </Link>                        
                        <Link component={RouterLnk} href="#" to="/countrycards" className={styles.navLinks}>
                            <Typography>Country Cards</Typography>
                        </Link>                                           
                    </nav>
                </Toolbar>
            </AppBar>           
        </div>
    )
}

export default NavBar;