import React from 'react';
import { Link } from 'react-router-dom';
import DonutChart from 'react-d3-donut';

const Splash = () => {

    let data = [{
        count: 20,      // Value of the property. Required.
        color: '#000000',  // Color code for the pie's color. Required.
        name: 'My name' // Optional value. Used to display in the tooltip.
    },
        {
            count: 20,      // Value of the property. Required.
            color: '#000000',  // Color code for the pie's color. Required.
            name: 'My last name' // Optional value. Used to display in the tooltip.
        }]

    return (
        <div>
            <Link to='/risk'>Get Started</Link>
            <DonutChart
                innerRadius={70}
                outerRadius={100}
                transition={true}
                svgClass="example1"
                pieClass="pie1"
                displayTooltip={true}
                strokeWidth={3}
                data={data} />
        </div>
    )
}

export default Splash;