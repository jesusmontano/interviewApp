import React from 'react';

class PortfolioQuestionnaire extends React.Component {
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = this.props.portfolio;
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
        return(
            <div>
                <label>What does your Portfolio Look Like?</label>
                <form onSubmit={this.handleSubmit}>
                    <input type="number" required="required" value={this.state.bonds} onChange={this.update('bonds')} min="0" />Bonds
                    <br/>
                    <input type="number" required="required" value={this.state.gold} onChange={this.update('gold')} min="0" />Gold
                    <br/>
                    <input type="number" required="required" value={this.state.international_stocks} onChange={this.update('international_stocks')} min="0" />International Stocks
                    <br/>
                    <input type="number" required="required" value={this.state.real_estate} onChange={this.update('real_estate')} min="0" />Real Estate
                    <br/>
                    <input type="number" required="required" value={this.state.stocks} onChange={this.update('stocks')} min="0" />Stocks
                    <br/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default PortfolioQuestionnaire;