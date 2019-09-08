import React from 'react';
import { Link } from 'react-router-dom'

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
                    <label>Oops! Looks like we don't know your risk profile. <Link to='/risk'>Get started here.</Link></label>
                </div>
            )
        }

        return(
            <div>
                This is the ideal portfolio with someone with a risk level
                of  {this.props.portfolio.risk}.
                <div>
                    Donut chart goes here...
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
                <Link to="/myportfolio">Fix My Portfolio!</Link>
            </div>
        )
    }
}

export default IdealPortfolio;