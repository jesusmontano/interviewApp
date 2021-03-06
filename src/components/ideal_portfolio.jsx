import React from 'react';
import { Link } from 'react-router-dom'
import DonutChart from 'react-d3-donut';

class IdealPortfolio extends React.Component {
    constructor(props){
        super(props);

        this.state = this.props.portfolio;
    }

    render(){

        const portfolios = {
            1: {
                bonds: '80',
                cash: '15',
                international_stocks: '0',
                real_estate: '0',
                risk: '1',
                stocks: '5'
            },
            2: {
                bonds: '75',
                cash: '15',
                international_stocks: '0',
                real_estate: '0',
                risk: '2',
                stocks: '10'
            },
            3: {
                bonds: '65',
                cash: '5',
                international_stocks: '0',
                real_estate: '15',
                risk: '3',
                stocks: '15'
            },
            4: {
                bonds: '45',
                cash: '10',
                international_stocks: '5',
                real_estate: '20',
                risk: '4',
                stocks: '20'
            },
            5: {
                bonds: '40',
                cash: '10',
                international_stocks: '0',
                real_estate: '20',
                risk: '5',
                stocks: '30'
            },
            6: {
                bonds: '30',
                cash: '15',
                international_stocks: '5',
                real_estate: '10',
                risk: '6',
                stocks: '40'
            },
            7: {
                bonds: '15',
                cash: '5',
                international_stocks: '20',
                real_estate: '15',
                risk: '7',
                stocks: '45'
            },
            8: {
                bonds: '5',
                cash: '5',
                international_stocks: '25',
                real_estate: '15',
                risk: '8',
                stocks: '50'
            },
            9: {
                bonds: '0',
                cash: '0',
                international_stocks: '25',
                real_estate: '20',
                risk: '9',
                stocks: '55'
            },
            10: {
                bonds: '5',
                cash: '0',
                international_stocks: '30',
                real_estate: '20',
                risk: '10',
                stocks: '45'
            },
        }

        if(!this.props.portfolio.risk) {
            return(
                <div>
                    {this.props.history.push('/risk')}                
                </div>
            )
        }

        let data = [
            {count: Number(Number(portfolios[this.props.portfolio.risk].bonds).toFixed(2)),
            color: '#0077B5',
            name: 'Bonds'
            },
            {count: Number(Number(portfolios[this.props.portfolio.risk].cash).toFixed(2)),
            color: '#313335',
            name: 'Cash'
            },
            {count: Number(Number(portfolios[this.props.portfolio.risk].international_stocks).toFixed(2)),
            color: '#86888A',
            name: 'International Stocks'
            },
            {count: Number(Number(portfolios[this.props.portfolio.risk].real_estate).toFixed(2)),
            color: '#CACCCE',
            name: 'Real Estate'
            },
            {count: Number(Number(portfolios[this.props.portfolio.risk].stocks).toFixed(2)),
            color: '#00A0DC',
            name: 'Stocks'
            },
        ]

        return(
            <div className="ideal-portfolio">
                <div className="ideal-portfolio-div">
                    <label className="ideal-portfolio-label">
                        This is the ideal portfolio based on your williningess to take risk.
                    </label>
                    <div>
                        <br/>
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
                    <ul>
                        <li>
                            Bonds: {portfolios[this.props.portfolio.risk].bonds}%
                        </li>
                        <li>
                            Cash: {portfolios[this.props.portfolio.risk].cash}%
                        </li>
                        <li>
                            International Stocks: {portfolios[this.props.portfolio.risk].international_stocks}%
                        </li>
                        <li>
                            Real Estate: {portfolios[this.props.portfolio.risk].real_estate}%
                        </li>
                        <li>
                            Stocks: {portfolios[this.props.portfolio.risk].stocks}%
                        </li>
                    </ul>
                    <button className="submit-button">
                        <Link to="/createportfolio" style={{ textDecoration: 'none', color: 'white' }}>Fix My Portfolio!</Link>
                    </button>
                </div>
            </div>
        )
    }
}

export default IdealPortfolio;