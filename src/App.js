import './App.css';
import { Switch, Route } from 'react-router';
import Form from './Form/Form';
import Posts from './Posts/Posts';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={"/posts"} component={Posts} />
        <Route exact path={"/"} component={Form} />
      </Switch>
    </div>
  );
}

export default App;
