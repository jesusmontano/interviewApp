import React from 'react';
import { Link } from 'react-router-dom'
import DonutChart from 'react-d3-donut';

class UserPortfolio extends React.Component {
    constructor(props){
        super(props);

        this.state = this.props.portfolio;
    }

    render(){

        if (this.props.portfolio.risk === '') {
            return (
                <div>
                    {this.props.history.push('/risk')}
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

        let data = [
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

        return(
            <div className="user-portfolio">
                <div className="user-portfolio-div">
                    <label>This is your portfolio:</label>
                    <br/>
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
                    <button className="submit-button">
                        <Link to="/fix" style={{ textDecoration: 'none', color: 'white' }}>Fix My Portfolio!</Link>
                    </button>
                </div>
            </div>
        )
    }
}

export default UserPortfolio