import './App.css';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import StartPage from './pages/StartPage';
import Practice from './pages/Practice';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/practice'>
            <Practice/>
          </Route>
          <Route path='/' exact>
            <StartPage/>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
