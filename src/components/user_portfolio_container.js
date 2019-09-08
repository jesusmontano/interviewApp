import { connect } from 'react-redux';
import { createPortfolio } from '../actions/actions';
import UserPortfolio from './user_portfolio';

const mapStateToProps = (state, ownProps) => ({
    portfolio: state.portfolio,
});

const mapDispatchToProps = dispatch => ({
    createPortfolio: portfolio => dispatch(createPortfolio(portfolio))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserPortfolio);