import merge from 'lodash/merge';
import { CREATE_PORTFOLIO } from '../actions/actions';

const defaultState = {
    portfolio: {
        bonds: '',
        stocks: '',
        international_stocks: '',
        gold: '',
        real_estate: '',
    },
};

const reducer = (oldState = defaultState, action) => {
    switch(action.type){
        case CREATE_PORTFOLIO:
            // return {
            //     portfolio: action.portfolio,
            // }
            return merge({}, oldState, action.portfolio);
        default:
            return oldState;
    }
}

export default reducer;