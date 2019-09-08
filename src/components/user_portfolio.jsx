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

        return(
            <div>
                This is your portfolio:
                <ul>
                    <li>
                        Bonds: {Math.trunc(this.state.bonds / total * 100)}% (${this.state.bonds})
                    </li>
                    <li>
                        Gold: {Math.trunc(this.state.gold / total * 100)}% (${this.state.gold})
                    </li>
                    <li>
                        International Stocks: {Math.trunc(this.state.international_stocks / total * 100)}% (${this.state.international_stocks})
                    </li>
                    <li>
                        Real Estate: {Math.trunc(this.state.real_estate / total * 100)}% (${this.state.real_estate})
                    </li>
                    <li>
                        Stocks: {Math.trunc(this.state.stocks / total * 100)}% (${this.state.stocks})
                    </li>
                </ul>
                <Link to="/fix">Fix My Portfolio!</Link>
            </div>
        )
    }
}

export default UserPortfolio