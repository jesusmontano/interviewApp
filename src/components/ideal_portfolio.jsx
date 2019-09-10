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
                gold: '15',
                international_stocks: '0',
                real_estate: '0',
                risk: '1',
                stocks: '5'
            },
            2: {
                bonds: '75',
                gold: '15',
                international_stocks: '0',
                real_estate: '0',
                risk: '2',
                stocks: '10'
            },
            3: {
                bonds: '65',
                gold: '5',
                international_stocks: '0',
                real_estate: '15',
                risk: '3',
                stocks: '15'
            },
            4: {
                bonds: '45',
                gold: '10',
                international_stocks: '5',
                real_estate: '20',
                risk: '4',
                stocks: '20'
            },
            5: {
                bonds: '',
                gold: '',
                international_stocks: '',
                real_estate: '',
                risk: '5',
                stocks: '34'
            },
            6: {
                bonds: '',
                gold: '',
                international_stocks: '',
                real_estate: '',
                risk: '6',
                stocks: '34'
            },
            7: {
                bonds: '',
                gold: '',
                international_stocks: '',
                real_estate: '',
                risk: '7',
                stocks: '34'
            },
            8: {
                bonds: '5',
                gold: '5',
                international_stocks: '25',
                real_estate: '15',
                risk: '8',
                stocks: '50'
            },
            9: {
                bonds: '0',
                gold: '0',
                international_stocks: '25',
                real_estate: '25',
                risk: '9',
                stocks: '55'
            },
            10: {
                bonds: '5',
                gold: '0',
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
            {count: Number(portfolios[this.props.portfolio.risk].bonds),
            color: '#0077B5',
            name: 'Bonds'
            },
            {count: Number(portfolios[this.props.portfolio.risk].gold),
            color: '#313335',
            name: 'Gold'
            },
            {count: Number(portfolios[this.props.portfolio.risk].international_stocks),
            color: '#86888A',
            name: 'International Stocks'
            },
            {count: Number(portfolios[this.props.portfolio.risk].real_estate),
            color: '#CACCCE',
            name: 'Real Estate'
            },
            {count: Number(portfolios[this.props.portfolio.risk].stocks),
            color: '#00A0DC',
            name: 'Stocks'
            },
        ]

        return(
            <div className="ideal-portfolio">
                <div className="ideal-portfolio-div">
                    This is the ideal portfolio based on your williningess to take risk.
                    <br/>
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
                            Gold: {portfolios[this.props.portfolio.risk].gold}%
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
                    <Link to="/createportfolio">Fix My Portfolio!</Link>
                </div>
            </div>
        )
    }
}

export default IdealPortfolio;