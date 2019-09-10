import React from 'react';
import { Link } from 'react-router-dom'
import DonutChart from 'react-d3-donut';

class Transactions extends React.Component{
    constructor(props){
        super(props);

        this.state = this.props.portfolio;
        this.generateTransactions = this.generateTransactions.bind(this);

        debugger;
    }

    generateTransactions(idealPortfolio){
        // const userPortfolio = this.props.portfolio;
        const userPortfolio = Object.assign({}, this.state);

        debugger;

        let totalUserDollars = 0;

        // for (let category in this.props.portfolio) {
        for (let category in userPortfolio) {
            if (category === 'risk') continue; 
            // totalUserDollars += Number(this.props.portfolio[category]);
            totalUserDollars += Number(userPortfolio[category]);
        }

        for (let category in idealPortfolio) {
            if (category === 'risk') continue;
            idealPortfolio[category] = Number(idealPortfolio[category]) * totalUserDollars / 100
        }

        let surplus_transactions = [];

        let deficit_transctions = [];

        // going through surpluses 
        // for (let category in this.props.portfolio) {
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
        // for (let category in this.props.portfolio) {
        for (let category in userPortfolio) {
            if (category === 'risk') continue;
            let diff = Number(idealPortfolio[category]) - Number(userPortfolio[category]);
            if (diff > 0) {
                userPortfolio[category] = Number(idealPortfolio[category]);
                userPortfolio.stocks = Number(userPortfolio.stocks) - diff;
                deficit_transctions.push('Move $' + diff.toFixed(2) + ' from stocks to ' + category + '.');
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

        let data = [
            {
                count: Number(portfolios[this.props.portfolio.risk].bonds),
                color: '#0077B5',
                name: 'Bonds'
            },
            {
                count: Number(portfolios[this.props.portfolio.risk].gold),
                color: '#313335',
                name: 'Gold'
            },
            {
                count: Number(portfolios[this.props.portfolio.risk].international_stocks),
                color: '#86888A',
                name: 'International Stocks'
            },
            {
                count: Number(portfolios[this.props.portfolio.risk].real_estate),
                color: '#CACCCE',
                name: 'Real Estate'
            },
            {
                count: Number(portfolios[this.props.portfolio.risk].stocks),
                color: '#00A0DC',
                name: 'Stocks'
            },
        ]

        let data2 = [
            {
                count: Number(this.props.portfolio.bonds),
                color: '#0077B5',
                name: 'Bonds'
            },
            {
                count: Number(this.props.portfolio.gold),
                color: '#313335',
                name: 'Gold'
            },
            {
                count: Number(this.props.portfolio.international_stocks),
                color: '#86888A',
                name: 'International Stocks'
            },
            {
                count: Number(this.props.portfolio.real_estate),
                color: '#CACCCE',
                name: 'Real Estate'
            },
            {
                count: Number(this.props.portfolio.stocks),
                color: '#00A0DC',
                name: 'Stocks'
            },
        ]

        const suggestions = this.generateTransactions(portfolios[this.props.portfolio.risk]);

        return(
            <div>
                <label>We suggest you make the following transactions to your portfolio.</label>
                <div>
                    <label>
                        This is what your portfolio looks like now:
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
                </div>
                <br/>

                
                <div>
                    <label>
                        This is what your portfolio looked like:
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
                            data={data2} />
                    </div>
                </div>
                <ul>
                    {suggestions.map((value, index) => {
                        return <li key={index}>{value}</li>
                    })}
                </ul>
                <Link to='/'>Go Back to Home Page!</Link>
            </div>
        )
    }
}

export default Transactions;