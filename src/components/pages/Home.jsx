import './Home.css';
import { Container } from '@material-ui/core'
import Footer from '../Footer'
import {
  // BrowserRouter as Router,
  // HashRouter,
  // Switch,
  // Route,
  Link
} from "react-router-dom";

function Home() {
  const imgBase = "/jardimdeefesto/image/";
  const informacaBarraca = [
    {id: 1, title: 'Titulo Teste', content: 'Welcome to the jungle baby', img: "produtoTeste.jpg", url: "teste"},
    {id: 2, title: 'Titulo Teste2', content: 'Welcome to the jungle baby2', img: "produtoTeste.jpg", url: "teste"},
    {id: 3, title: 'Titulo Teste3', content: 'Welcome to the jungle baby3', img: "produtoTeste.jpg", url: "teste"},
    {id: 4, title: 'Titulo Teste4', content: 'Welcome to the jungle baby4', img: "produtoTeste.jpg", url: "teste"},
    {id: 5, title: 'Titulo Teste5', content: 'Welcome to the jungle baby5', img: "produtoTeste.jpg", url: "teste"},
    {id: 6, title: 'Titulo Teste6', content: 'Welcome to the jungle baby6', img: "produtoTeste.jpg", url: "teste"},
    {id: 7, title: 'Titulo Teste6', content: 'Welcome to the jungle baby6', img: "produtoTeste.jpg", url: "teste"},
  ]
  const barracas = (
    <>
      {informacaBarraca.map((barraca)=>
        <Link to={'./' + barraca.url}>
        <div className="grid-item" key={barraca.id}>
          <img class="grid-img" alt="" src={imgBase + barraca.img} />
          {barraca.title}<br/>
          {barraca.content}
        </div>
        </Link>
      )}
    </>
  )
  return (
    <div className="Home">
      <Container> 
        <div 
        
        className="grid-container"
        
        >
            {barracas}
        </div>
      </Container>
      <Footer />
    </div>
  );

}

export default Home;