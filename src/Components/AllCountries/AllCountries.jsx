import React, { useState, useEffect } from 'react';
import { fetchAllData } from '../../api';
import styles from './AllCountries.module.css';
import BarChart from '../BarChart';

function AllCountries({country}) {
    const [data, setData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetchAllData();
            setData(result);
        };

        fetchData();
    },[]);
      
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

    return (
        <div className={styles.container}>
           {(data)?data.map((country,index)=>{ 
            return ( 
                    <div className={styles.dataBox} key={index}>
                        <div className={styles.imgContainer}>
                            <img src={flagUrl(data[index].country)} alt='Country' />
                        </div>
                        <h2>{data[index].country}</h2>
                        <BarChart
                                totCases={data[index].cases}
                                totDeaths={data[index].deaths}
                                totRecovered={data[index].recovered}
                            />                        
                        <div className={styles.stats}>
                            <dl>
                                <dt>Cases</dt>
                            <dd>{data[index].cases}</dd>
                            <dt>Recovered</dt>
                            <dd>{data[index].recovered}</dd>
                            <dt>Recovered%</dt>
                            <dd>{percentage(data[index].recovered,data[index].cases)}%</dd>                                
                            <dt>Deaths</dt>
                            <dd>{data[index].deaths}</dd>                            
                            <dt>Death%</dt>
                            <dd>{percentage(data[index].deaths,data[index].cases)}%</dd>                                
                            <dt>Active</dt>
                            <dd>{data[index].active}</dd>
                            <dt>New-Cases</dt>
                            <dd>{data[index].todayCases}</dd>
                            <dt>New-Deaths</dt>
                            <dd>{data[index].todayDeaths}</dd>       
                            <dt>Closed Cases</dt>
                            <dd>{data[index].recovered + data[index].deaths}</dd>               
                            </dl>
                        </div>
                    </div>) //End Return
           }).slice(1):<div className={styles.loading}>Loading.....</div>}
        </div>
    )
}

export default AllCountries;