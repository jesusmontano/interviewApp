import React from 'react';
import { Link } from 'react-router-dom'
import DonutChart from 'react-d3-donut';

class UserPortfolio extends React.Component {
    constructor(props){
        super(props);

        this.state = this.props.portfolio;

        debugger;
    }

    render(){

        const total = (
            Number(this.state.bonds) +
            Number(this.state.gold) +
            Number(this.state.international_stocks) +
            Number(this.state.real_estate) +
            Number(this.state.stocks)
        )

        let data = [
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

        return(
            <div>
                This is your portfolio:
                <div>
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
                <Link to="/fix">Fix My Portfolio!</Link>
            </div>
        )
    }
}

export default UserPortfolio