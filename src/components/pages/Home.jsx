import './Pages.css';
import { Container } from '@material-ui/core';
import barracas from '../data/barracas'

import {
  // BrowserRouter as Router,
  // HashRouter,
  // Switch,
  // Route,
  Link
} from "react-router-dom";

var ReactGA = require('react-ga');

var informacaBarraca = barracas
function Home() {
  const imgBase = "/image/";
  const barracas = (
    <>
      {informacaBarraca.map((barraca)=>
      <div className="grid-item" key={barraca.id}>
        <ReactGA.OutboundLink
        eventLabel={barraca.url}
        to={barraca.url}
        target="_blank"
        >
        <Link to={'./' + barraca.url}>
        
          <img className="grid-img" alt="" src={imgBase + barraca.img} />
          <h3>{barraca.title}</h3>
          <p>{barraca.content}</p>
        
        </Link>
        </ReactGA.OutboundLink>
        </div>
      )}
    </>
  )
  return (
    <div className="background-amarelo" >
      <Container> 
        <div 
        
        className="grid-container"
        
        >
            {barracas}
        </div>
      </Container>
    </div>
  );

}

export default Home;