import { connect } from 'react-redux';
import { createPortfolio } from '../actions/actions';
import RiskQuestionnaire from './risk_questionnaire';

const mapStateToProps = (state, ownProps) => ({
    portfolio: state.portfolio,
    risk: state.risk
});

const mapDispatchToProps = dispatch => ({
    createPortfolio: (portfolio) => dispatch(createPortfolio(portfolio))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RiskQuestionnaire);