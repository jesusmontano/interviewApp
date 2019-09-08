import React from 'react';
import { Link } from 'react-router-dom'

class UserPortfolio extends React.Component {
    constructor(props){
        super(props);

        this.state = this.props.portfolio;
    }

    render(){

        const total = (
            Number(this.state.bonds) +
            Number(this.state.gold) +
            Number(this.state.international_stocks) +
            Number(this.state.real_estate) +
            Number(this.state.stocks)
        )

        debugger;

        return(
            <div>
                This is your portfolio:
                <ul>
                    <li>
                        Bonds: {(this.state.bonds / total) * 100}%
                    </li>
                    <li>
                        Gold: {(this.state.gold / total) * 100}%
                    </li>
                    <li>
                        International Stocks: {(this.state.international_stocks / total) * 100}%
                    </li>
                    <li>
                        Real Estate: {(this.state.real_estate / total) * 100}%
                    </li>
                    <li>
                        Stocks: {(this.state.stocks / total) * 100}%
                    </li>
                </ul>
                <Link to="/fix">Show Me How to Fix my Portfolio!</Link>
            </div>
        )
    }
}

export default UserPortfolio