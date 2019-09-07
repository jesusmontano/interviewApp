import { connect } from 'react-redux';
import { createPortfolio } from '../actions/actions'
import IdealPortfolio from './ideal_portfolio';

const mapStateToProps = state => ({
    portfolio: state.portfolio
});

const mapDispatchToProps = dispatch => ({
    createPortfolio: portfolio => dispatch(createPortfolio(portfolio))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IdealPortfolio);