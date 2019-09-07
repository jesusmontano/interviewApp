import React from 'react';
import { withRouter } from 'react-router-dom';

class RiskQuestionnaire extends React.Component {
    constructor(props){
        super(props);

        this.state = this.props.portfolio;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createPortfolio(this.state);
    }

    update(field){
        return e => {
            this.setState({[field]: e.target.value})
        }
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}></form>
                    <input type="text" value={this.state.risk} onChange={this.update('risk')}/>
            </div>
        )
    }
}

export default RiskQuestionnaire;