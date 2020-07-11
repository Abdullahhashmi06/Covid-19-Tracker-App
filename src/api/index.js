import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';
const allDataUrl = 'https://coronavirus-19-api.herokuapp.com/countries';

export const fetchData = async (country) => {
    let changeableUrl = url;

    let gurl = ''; 

    if(country) {
        changeableUrl = `${url}/countries/${country}`;
        gurl = `https://api.opencagedata.com/geocode/v1/json?q=${country}&key=a92909a431e14eee9559c5d60489597c`;
    }
    
    var lat = 30;
    var lng = 70;

    try {
        const { data: { confirmed, recovered, deaths, lastUpdate  } } = await axios.get(changeableUrl);
        if(gurl !== ''){
            const response = await axios.get(gurl);
            lat = response.data.results[0].geometry.lat;
            lng = response.data.results[0].geometry.lng;
        }
        return {confirmed, recovered, deaths, lastUpdate, lat, lng };        
    } catch (error) {
        console.log(error);
    }
}

export const fetchDailyData = async () => {
    try {
        const  { data }  = await axios.get(`${url}/daily`);

        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            recovered: dailyData.recovered.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }));

        return modifiedData;

    } catch (error) {
        console.log(error);
    }
}

export const fetchCountries = async () => {
    try {
        const { data: { countries }} = await axios.get(`${url}/countries`);

        return countries.map((country) => country.name);
    } catch (error) {
        
    }
}

export const fetchAllData = async () => {
    try {
        const { data} = await axios.get(`${allDataUrl}`);
        return data;
    } catch (error) {
        
    }
}