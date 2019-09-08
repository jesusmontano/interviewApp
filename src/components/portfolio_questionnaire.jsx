import React from 'react';

class PortfolioQuestionnaire extends React.Component {
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = this.props.portfolio;
    }

    handleSubmit(e) {
        e.preventDefault();
        return this.props.createPortfolio(this.state) && this.props.history.push('/');
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }

    render(){
        return(
            <div>
                This is the portfolio questionnaire...
            </div>
        )
    }
}

export default PortfolioQuestionnaire;