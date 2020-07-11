import React, { useState, useEffect } from 'react';
import { fetchAllData } from '../../api';
import styles from './InfoCard.module.css';
import CountUp from 'react-countup';
import BarChart from '../BarChart';

function InfoCard({country}) {
    const [data, setData] = useState();
    const [geoData, setGeoData] = useState();
    //console.log(country);
    if(country === ''){
        country = 'World';
    }

    var url = 'https://coronavirus-19-api.herokuapp.com/countries/'+country;
    
    useEffect(() => {

        async function getData(url){
            const response = await fetch(url);
            let data = await response.json();
            setData(data);
        }

        // async function getGeoData(gurl){
        //     const response = await fetch(gurl);
        //     let gdata = await response.json();
        //     setGeoData(gdata.results[0].geometry);
        //     //console.log(gdata.results[0].geometry);
        // }      

        getData(url);
        //getGeoData(gurl);
   
    },[url]);
      
    function flagUrl(abbr){
        var name = '';       
        switch(abbr){
            case 'USA':
                name = 'united-states-of-america'; break; 
            case 'UK':
                name = 'united-kingdom'; break;
            case 'UAE':
                name = 'united-arab-emirates'; break;                                        
            default:
                name = abbr.toLowerCase().replace(' ','-');
        }
        return `https://cdn.countryflags.com/thumbs/${name}/flag-400.png`;
    }

    function percentage(num1, num2)
    {
        var per = 'N/a';
        if(num1 > 0 && num2 > 0)
        {
            per = Math.round((num1/num2)*100,2);
        }
        return per;
    }

    if(data){
    return (
        <div className={styles.container}>
            <div className={styles.dataBox}>
                    <div className={styles.imgContainer}>
                        <img src={flagUrl(data.country)} alt='Country' />
                    </div>
                <h2>{data.country}</h2>
                <div className={styles.mainDivider}>
                    <BarChart
                            className={styles.bar}
                            totCases={data.cases}
                            totDeaths={data.deaths}
                            totRecovered={data.recovered}
                        />                        
                    <div className={styles.stats}>
                        <dl>
                            <dt>Cases</dt>
                            <dd><CountUp start={0} end={data.cases} duration={3.25} separator=" ," /></dd>
                            <dt>Recovered</dt>
                            <dd><CountUp start={0} end={data.recovered} duration={3.25} separator=" ," /></dd>
                            <dt>Recovered%</dt>
                            <dd><CountUp start={0} end={percentage(data.recovered,data.cases)} duration={3.25} separator=" ," />%</dd>                                
                            <dt>Deaths</dt>
                            <dd><CountUp start={0} end={data.deaths} duration={3.25} separator=" ," /></dd>                            
                            <dt>Death%</dt>
                            <dd><CountUp start={0} end={percentage(data.deaths,data.cases)} duration={3.25} separator=" ," />%</dd>                                
                            <dt>Active</dt>
                            <dd><CountUp start={0} end={data.active} duration={3.25} separator=" ," /></dd>
                            <dt>New-Cases</dt>
                            <dd><CountUp start={0} end={data.todayCases} duration={3.25} separator=" ," /></dd>
                            <dt>New-Deaths</dt>
                            <dd><CountUp start={0} end={data.todayDeaths} duration={3.25} separator=" ," /></dd>       
                            <dt>Closed Cases</dt>
                            <dd><CountUp start={0} end={data.recovered + data.deaths} duration={3.25} separator=" ," /></dd>                                
                        </dl>
                    </div>
                </div>
            </div>     
        </div>
    )} else {
        return <div>Loading....</div>;
    }
}

export default InfoCard;