import logo from '../static/MoedaEfesto.png';
import './App.css';
import Home from './Home';
import EmBreve from './EmBreve';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Em breve um verdadeiro Jardim de artesãos
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://ansuzsolucoes.github.io/"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Desenvolvido por Ansuz Soluções
    //     </a>
    //   </header>
    // </div>

    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route> */}
          <Route path="/">
            <EmBreve />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
