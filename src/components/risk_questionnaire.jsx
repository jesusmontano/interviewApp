import React from 'react';
import { withRouter } from 'react-router-dom';

class RiskQuestionnaire extends React.Component {
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = this.props.portfolio;
        debugger;
    }

    handleSubmit(e){
        e.preventDefault();
        return this.props.createPortfolio(this.state);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.risk} onChange={this.update('risk')}/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

export default RiskQuestionnaire;