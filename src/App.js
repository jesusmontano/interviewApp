import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import RiskQuestionnaireContainer from './components/risk_questionnaire_container';
import IdealPortfolioContainer from './components/ideal_portfolio_container';
import PortfolioQuestionnaireContainer from './components/portfolio_questionnaire_container';
import UserPortfolioContainer from './components/user_portfolio_container';
import TransactionsContainer from './components/transactions_container';
import Splash from './components/splash';
import { Provider } from 'react-redux';
import store from './store/store'

function App() {
  return (
    <div>
      JesusPlan
      <Provider store={store}>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Splash} />
            <Route exact path="/risk" component={RiskQuestionnaireContainer} />
            <Route exact path="/ideal" component={IdealPortfolioContainer} />
            <Route exact path="/createportfolio" component={PortfolioQuestionnaireContainer} />
            <Route exact path="/myportfolio" component={UserPortfolioContainer} />
            <Route exact path="/fix" component={TransactionsContainer} />
          </Switch>
        </HashRouter>
      </Provider>
    </div>
  );
}

export default App;
