import React from 'react';
import { withRouter } from 'react-router-dom';

class RiskQuestionnaire extends React.Component {
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = this.props.portfolio;
    }

    handleSubmit(e){
        e.preventDefault();
        return this.props.createPortfolio(this.state) && this.props.history.push('/ideal');
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }

    render(){
        return(
            <div className="risk-questionnaire">
                <div>
                    <label>What is your Risk Profile?</label>
                    <form onSubmit={this.handleSubmit}>
                        <input type="number" value={this.state.risk} required="required" onChange={this.update('risk')} min="1" max="10"/>
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default RiskQuestionnaire;