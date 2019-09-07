import React from 'react';
import { Link } from 'react-router-dom'

class IdealPortfolio extends React.Component {
    constructor(props){
        super(props);

        this.state = this.props.portfolio;
        debugger;
    }

    render(){
        if(!this.props.portfolio.risk) {
            return(
                <div>
                    <label>Oops! Looks like we don't know your risk profile. <Link to='/risk'>Get started here.</Link></label>
                    <div>
                        Donut chart goes here...
                    </div>
                </div>
            )
        }

        return(
            <div>
                This is the ideal portfolio with someone with a risk level
                of  {this.props.portfolio.risk}.
            </div>
        )
    }
}

export default IdealPortfolio;