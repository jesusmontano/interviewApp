import React from 'react';

class Transactions extends React.Component{
    constructor(props){
        super(props);

        this.state = this.props.portfolio;
    }

    render(){
        return(
            <div>
                <label>Make these transactions.</label>
                <br/>
                Move 'X' from 'A' to 'B'...
            </div>
        )
    }
}

export default Transactions;