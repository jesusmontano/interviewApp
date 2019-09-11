import { CREATE_PORTFOLIO } from '../actions/actions';

const defaultState = {
    portfolio: {
        bonds: '',
        stocks: '',
        international_stocks: '',
        cash: '',
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
        default:
            return oldState;
    }
}

export default reducer;