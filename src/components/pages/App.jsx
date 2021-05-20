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
import ReactGA from 'react-ga';
import Footer from '../Footer';
import { createBrowserHistory } from 'history';
const trackingId = "G-2HT9GDFS5V"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);
const history = createBrowserHistory();

history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});


function App() {
  return (
    <>
      <HashRouter basename='/' history={history}>
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
      <Footer />
    </>
  );
}

export default App;
