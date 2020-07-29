import React from 'react';
import './TeslaStats.css';
import TeslaBattery from '../../containers/TeslaBattery';


function TeslaStats(props) {
    const listItems = props.carstats.map((stat) => (
        <li key={stat.model}>
            <div className={`tesla-stats-icon tesla-stats-icon--${stat.model.toLowerCase()}`}></div>
            <p>{stat.miles}</p>
        </li>
    ));

    return (
        <div className='tesla-stats'>
            <ul>{listItems}</ul>
        </div>
    )
};

export default TeslaStats;
