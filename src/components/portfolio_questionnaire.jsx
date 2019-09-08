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
            debugger;
            this.setState({ [field]: e.target.value });
        };
    }

    render(){
        return(
            <div>
                <label>What does your Portfolio Look Like?</label>
                <form onSubmit={this.handleSubmit}>
                    <input type="number" value={this.state.bonds} onChange={this.update('bonds')} min="1" max="10" />Bonds
                    <br/>
                    <input type="number" value={this.state.gold} onChange={this.update('gold')} min="1" max="10" />Gold
                    <br/>
                    <input type="number" value={this.state.international_stocks} onChange={this.update('international_stocks')} min="1" max="10" />International Stocks
                    <br/>
                    <input type="number" value={this.state.real_estate} onChange={this.update('real_estate')} min="1" max="10" />Real Estate
                    <br/>
                    <input type="number" value={this.state.stocks} onChange={this.update('stocks')} min="1" max="10" />Stocks
                    <br/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default PortfolioQuestionnaire;