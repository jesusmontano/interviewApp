const defaultState = {
    portfolio: {
        bonds: '',
        stocks: '',
        international_stocks: '',
        gold: '',
        real_estate: '',
        risk: ''
    },
};

const reducer = (oldState = defaultState, action) => {
    switch(action.type){
        case CREATE_PORTFOLIO:
            return {
                portfolio: action.portfolio,
            }
        case DEFAULT:
            return {
                oldState
            }
    }
}

export default reducer;