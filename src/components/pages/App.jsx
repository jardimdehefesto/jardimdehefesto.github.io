// import logo from '../static/MoedaEfesto.png';
import './App.css';
import Header from "./../Header"
import Home from './Home';
import Teste from './teste';
import Agora from "./Agora";
import ElementalJoias from './ElementalJoias';
import {
  // BrowserRouter as Router,
  HashRouter,
  Switch,
  Route,
  //Link
} from "react-router-dom";
import Sobre from './Sobre';

function App() {
  return (
    <HashRouter basename='/'>
      <div>
        <Header />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/home">
            <Home />
          </Route>
          <Route path="/teste">
            <Teste />
          </Route>
          <Route path="/agora">
            <Agora />
          </Route>
          <Route path="/elementaljoias">
            <ElementalJoias />
          </Route>
          <Route path="/sobre">
            <Sobre />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="*">
            <Home />
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
