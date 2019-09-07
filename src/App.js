import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import RiskQuestionnaireContainer from './components/risk_questionnaire_container';
import { Provider } from 'react-redux';
import store from './store/store'

function App() {
  return (
    <div>
      JesusPlan
      <Provider store={store}>
        <HashRouter>
          <Switch>
            <Route exact path="/risk" component={RiskQuestionnaireContainer} />
          </Switch>
        </HashRouter>
      </Provider>
    </div>
  );
}

export default App;
