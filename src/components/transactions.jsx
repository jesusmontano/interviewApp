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
                userPortfolio.stocks = Number(userPortfolio.stocks) + diff;
                if (category !== 'stocks') {
                    surplus_transactions.push('Move $' + diff.toFixed(2) + ' from ' + category + ' to stocks.')
                }
            }
        }

        // going through deficits
        for (let category in userPortfolio) {
            if (category === 'risk') continue;
            let diff = Number(idealPortfolio[category]) - Number(userPortfolio[category]);
            if (diff > 0) {
                userPortfolio[category] = Number(idealPortfolio[category]);
                userPortfolio.stocks = Number(userPortfolio.stocks) - diff;
                if (category !== 'stocks') {
                    deficit_transctions.push('Move $' + diff.toFixed(2) + ' from stocks to ' + category + '.');
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
            Number(this.state.gold) +
            Number(this.state.international_stocks) +
            Number(this.state.real_estate) +
            Number(this.state.stocks)
        )

        let portfolios = {
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

        let data = [
            {
                count: Number(Number(portfolios[this.props.portfolio.risk].bonds) / 100 * total),
                color: '#0077B5',
                name: 'Bonds'
            },
            {
                count: Number(Number(portfolios[this.props.portfolio.risk].gold) / 100 * total),
                color: '#313335',
                name: 'Gold'
            },
            {
                count: Number(Number(portfolios[this.props.portfolio.risk].international_stocks) / 100 * total),
                color: '#86888A',
                name: 'International Stocks'
            },
            {
                count: Number(Number(portfolios[this.props.portfolio.risk].real_estate) / 100 * total),
                color: '#CACCCE',
                name: 'Real Estate'
            },
            {
                count: Number(Number(portfolios[this.props.portfolio.risk].stocks) / 100 * total),
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
                count: Number(Number(this.props.portfolio.gold).toFixed(2)),
                color: '#313335',
                name: 'Gold'
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

        debugger;

        const suggestions = this.generateTransactions(portfolios[this.props.portfolio.risk]);

        debugger;

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
                                    Gold: {Math.trunc(this.state.gold / total * 100)}% (${Number(this.state.gold).toFixed(2)})
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
                                    Bonds: {portfolios[this.props.portfolio.risk].bonds / total * 100}% (${Number(portfolios[this.props.portfolio.risk].bonds).toFixed(2)})
                                </li>
                                <li>
                                    Gold: {portfolios[this.props.portfolio.risk].gold / total * 100}% (${Number(portfolios[this.props.portfolio.risk].gold).toFixed(2)})
                                </li>
                                <li>
                                    International Stocks: {portfolios[this.props.portfolio.risk].international_stocks / total * 100}% (${Number(portfolios[this.props.portfolio.risk].international_stocks).toFixed(2)})
                                </li>
                                <li>
                                    Real Estate: {portfolios[this.props.portfolio.risk].real_estate / total * 100}% (${Number(portfolios[this.props.portfolio.risk].real_estate).toFixed(2)})
                                </li>
                                <li>
                                    Stocks: {portfolios[this.props.portfolio.risk].stocks / total * 100}% (${Number(portfolios[this.props.portfolio.risk].stocks).toFixed(2)})
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