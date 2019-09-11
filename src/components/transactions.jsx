import React from 'react';
import { Link } from 'react-router-dom'
import DonutChart from 'react-d3-donut';

class Transactions extends React.Component{
    constructor(props){
        super(props);

        this.state = this.props.portfolio;
        this.generateTransactions = this.generateTransactions.bind(this);
    }

    generateTransactions(idealPortfolio){
        const userPortfolio = Object.assign({}, this.state);

        let totalUserDollars = 0;

        for (let category in userPortfolio) {
            if (category === 'risk') continue; 
            totalUserDollars += Number(userPortfolio[category]);
        }

        for (let category in idealPortfolio) {
            if (category === 'risk') continue;
            idealPortfolio[category] = Number(idealPortfolio[category]) * totalUserDollars / 100
        }

        let surplus_transactions = [];

        let deficit_transctions = [];

        // going through surpluses 
        for (let category in userPortfolio) {
            if (category === 'risk') continue;
            let diff = Number(userPortfolio[category]) - Number(idealPortfolio[category]);
            if (diff > 0) {
                userPortfolio[category] = Number(idealPortfolio[category]);
                //or maybe here... actually i think this is good
                userPortfolio.cash = Number(userPortfolio.cash) + diff;
                if (category !== 'cash') {
                    if (category === 'real_estate') {
                        surplus_transactions.push('Move $' + diff.toFixed(2) + ' from real estate to cash.')  ////// to cash
                    } else if (category === 'international_stocks') {
                        surplus_transactions.push('Move $' + diff.toFixed(2) + ' from international stocks to cash.') //// to cash
                    } else {
                        surplus_transactions.push('Move $' + diff.toFixed(2) + ' from ' + category + ' to cash.') ///// to cash
                    }
                }
            }
        }

        // going through deficits
        for (let category in userPortfolio) {
            if (category === 'risk') continue;
            let diff = Number(idealPortfolio[category]) - Number(userPortfolio[category]);
            if (diff > 0) {
                userPortfolio[category] = Number(idealPortfolio[category]);
                userPortfolio.cash = Number(userPortfolio.cash) - diff;
                if (category !== 'cash') {
                    if (category === 'real_estate') {
                        deficit_transctions.push('Move $' + diff.toFixed(2) + ' from cash to real estate.'); //// from cash
                    } else if (category === 'international_stocks') {
                        deficit_transctions.push('Move $' + diff.toFixed(2) + ' from cash to international stocks.'); //// from cash 
                    } else {
                        deficit_transctions.push('Move $' + diff.toFixed(2) + ' from cash to ' + category + '.'); //// from cash
                    }
                }
            }
        }

        let totalTransactions = surplus_transactions.concat(deficit_transctions);

        return totalTransactions;
    }

    render(){

        if (this.props.portfolio.risk === '') {
            return (
                <div>
                    {this.props.history.push('/risk')};
                </div>
            )
        }

        const total = (
            Number(this.state.bonds) +
            Number(this.state.cash) +
            Number(this.state.international_stocks) +
            Number(this.state.real_estate) +
            Number(this.state.stocks)
        )

        let portfolios = {
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
                real_estate: '10',
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
                real_estate: '25',
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

        let data = [
            {
                count: Math.round(Number(Number(portfolios[this.props.portfolio.risk].bonds) / 100 * total)),
                color: '#0077B5',
                name: 'Bonds'
            },
            {
                count: Math.round(Number(Number(portfolios[this.props.portfolio.risk].cash) / 100 * total)),
                color: '#313335',
                name: 'Cash'
            },
            {
                count: Math.round(Number(Number(portfolios[this.props.portfolio.risk].international_stocks) / 100 * total)),
                color: '#86888A',
                name: 'International Stocks'
            },
            {
                count: Math.round(Number(Number(portfolios[this.props.portfolio.risk].real_estate) / 100 * total)),
                color: '#CACCCE',
                name: 'Real Estate'
            },
            {
                count: Math.round(Number(Number(portfolios[this.props.portfolio.risk].stocks) / 100 * total)),
                color: '#00A0DC',
                name: 'Stocks'
            },
        ]

        let data2 = [
            {
                count: Number(Number(this.props.portfolio.bonds).toFixed(2)),
                color: '#0077B5',
                name: 'Bonds'
            },
            {
                count: Number(Number(this.props.portfolio.cash).toFixed(2)),
                color: '#313335',
                name: 'Cash'
            },
            {
                count: Number(Number(this.props.portfolio.international_stocks).toFixed(2)),
                color: '#86888A',
                name: 'International Stocks'
            },
            {
                count: Number(Number(this.props.portfolio.real_estate).toFixed(2)),
                color: '#CACCCE',
                name: 'Real Estate'
            },
            {
                count: Number(Number(this.props.portfolio.stocks).toFixed(2)),
                color: '#00A0DC',
                name: 'Stocks'
            },
        ]

        const suggestions = this.generateTransactions(portfolios[this.props.portfolio.risk]);

        return(
            <div className="transactions">
                <div className="transactions-div">
                    <div className="transactions-list">
                        <br/>
                        <label>We suggest you make the following transactions to your portfolio.</label>
                        <ul>
                            {suggestions.map((value, index) => {
                                return <li key={index}>{value}</li>
                            })}
                        </ul>
                    </div>
                    <div className="portfolio-comparison">


                        <div className="old-portfolio">
                            <label>
                                Before:
                            </label>
                            <div>
                                <br />
                                <DonutChart
                                    innerRadius={70}
                                    outerRadius={100}
                                    transition={true}
                                    svgClass="example1"
                                    pieClass="pie2"
                                    displayTooltip={true}
                                    strokeWidth={3}
                                    data={data2} />
                            </div>
                            <ul>
                                <li>
                                    Bonds: {Math.trunc(this.state.bonds / total * 100)}% (${Number(this.state.bonds).toFixed(2)})
                                </li>
                                <li>
                                    Cash: {Math.trunc(this.state.cash / total * 100)}% (${Number(this.state.cash).toFixed(2)})
                                </li>
                                <li>
                                    International Stocks: {Math.trunc(this.state.international_stocks / total * 100)}% (${Number(this.state.international_stocks).toFixed(2)})
                                </li>
                                <li>
                                    Real Estate: {Math.trunc(this.state.real_estate / total * 100)}% (${Number(this.state.real_estate).toFixed(2)})
                                </li>
                                <li>
                                    Stocks: {Math.trunc(this.state.stocks / total * 100)}% (${Number(this.state.stocks).toFixed(2)})
                                </li>
                            </ul>
                        </div>

                        <div className="new-portfolio">
                            <label>
                                After:
                            </label>
                            <div>
                                <br />
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
                                    Bonds: {Math.round(portfolios[this.props.portfolio.risk].bonds / total * 100)}% (${Number(portfolios[this.props.portfolio.risk].bonds).toFixed(2)})
                                </li>
                                <li>
                                    Cash: {Math.round(portfolios[this.props.portfolio.risk].cash / total * 100)}% (${Number(portfolios[this.props.portfolio.risk].cash).toFixed(2)})
                                </li>
                                <li>
                                    International Stocks: {Math.round(portfolios[this.props.portfolio.risk].international_stocks / total * 100)}% (${Number(portfolios[this.props.portfolio.risk].international_stocks).toFixed(2)})
                                </li>
                                <li>
                                    Real Estate: {Math.round(portfolios[this.props.portfolio.risk].real_estate / total * 100)}% (${Number(portfolios[this.props.portfolio.risk].real_estate).toFixed(2)})
                                </li>
                                <li>
                                    Stocks: {Math.round(portfolios[this.props.portfolio.risk].stocks / total * 100)}% (${Number(portfolios[this.props.portfolio.risk].stocks).toFixed(2)})
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                    <button>
                        <Link to='/'>Go back to home page!</Link>
                    </button>
                    <br/>
                </div>
            </div>
        )
    }
}

export default Transactions;