import React from 'react';

class PortfolioQuestionnaire extends React.Component {
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            bonds: '',
            cash: '',
            international_stocks: '',
            real_estate: '',
            risk: this.props.portfolio.risk,
            stocks: ''
        }

    }

    handleSubmit(e) {
        e.preventDefault();
        return this.props.createPortfolio(this.state) && this.props.history.push('/myportfolio');
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }

    render(){
        if (!this.props.portfolio.risk) {
            return (
                <div>
                    {this.props.history.push('/risk')}
                </div>
            )
        }
        
        return(
            <div className="portfolio-questionnaire">
                <div className="portfolio-questionnaire-div">
                    <label className="portfolio-questionnaire-label">What does your portfolio look like?</label>
                    <br/>
                    <form className="portfolio-questionnaire-form" onSubmit={this.handleSubmit}>
                        <div className="category">
                            <label>Bonds:</label>
                            <input type="number" required="required" step="0.01" value={this.state.bonds} onChange={this.update('bonds')} min="0" placeholder="Enter dollar amount."/>
                        </div>
                        <br/>
                        <div className="category">
                            <label>Cash:</label>
                            <input type="number" required="required" step="0.01" value={this.state.cash} onChange={this.update('cash')} min="0" placeholder="Enter dollar amount."/>
                        </div>
                        <br/>
                        <div className="category">
                            <label>International Stocks:</label>
                            <input type="number" required="required" step="0.01" value={this.state.international_stocks} onChange={this.update('international_stocks')} min="0" placeholder="Enter dollar amount."/>
                        </div>
                        <br/>
                        <div className="category">
                            <label>Real Estate:</label>
                            <input type="number" required="required" step="0.01" value={this.state.real_estate} onChange={this.update('real_estate')} min="0" placeholder="Enter dollar amount."/>
                        </div>
                        <br/>
                        <div className="category">
                            <label>Stocks:</label>
                            <input type="number" required="required" step="0.01" value={this.state.stocks} onChange={this.update('stocks')} min="0" placeholder="Enter dollar amount."/>
                        </div>
                        <br/>
                        <input className="submit-button" type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        )
    }
}

export default PortfolioQuestionnaire;