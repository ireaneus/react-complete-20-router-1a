import { Route, Switch } from 'react-router-dom';
import MainNav from './components/layout/MainNavigation';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/verses"></Route>
        <Route path="/verses/:verseId"></Route>
        <Route path="/addverse"></Route>
      </Switch>
    </div>
  );
}

export default App;
