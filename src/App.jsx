import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { AllVerses, NewVerse, VerseDetails } from './pages';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/verses' />
        </Route>
        <Route path="/verses" exact>
          <AllVerses />
        </Route>
        <Route path="/verses/:verseId">
          <VerseDetails />
        </Route>
        <Route path="/addverse">
          <NewVerse />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
