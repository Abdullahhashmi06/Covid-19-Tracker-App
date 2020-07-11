import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Grid } from '@material-ui/core';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import AllCountries from './Components/AllCountries/AllCountries';

import styles from './App.module.css';


import { fetchData } from './api';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });
}

  render() {
    const { country } = this.state;
    const { data } = this.state;

    return (
      <BrowserRouter>
      <div className={styles.container}>
        <Grid container spacing={3}>
          <Grid container item xs={12} md={12} className={styles.navGrid}>
            <NavBar />
          </Grid>
          
            <Routes>
              <Route path="/" element={<Home fd={data} country={country} hcc={this.handleCountryChange} />} />
              <Route exact path="/countrycards" element={<AllCountries />} />
            </Routes>          
          
        </Grid>
      </div> 
      </BrowserRouter> 
    )
  }
}

export default App;