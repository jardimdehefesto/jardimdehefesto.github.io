import './Home.css';
import { Container } from '@material-ui/core';
import Footer from '../Footer';
// import Theme from "./../Theme";
import {
  // BrowserRouter as Router,
  // HashRouter,
  // Switch,
  // Route,
  Link
} from "react-router-dom";

// const theme = Theme.palette;

function Home() {
  const imgBase = "/jardimdeefesto/image/";
  // var informacaBarraca = JSON.parse('./info.json')
  const informacaBarraca = [
    {id: 1, title: 'Elemental', content: 'Jóias e Varieades', img: "elemental.jpg", url: "https://lojaelemental.com.br/"},
    {id: 2, title: 'Titulo Teste2', content: 'Welcome to the jungle baby2', img: "produtoTeste.jpg", url: "./teste"},
    {id: 3, title: 'Titulo Teste3', content: 'Welcome to the jungle baby3', img: "produtoTeste.jpg", url: "./teste"},
    {id: 4, title: 'Titulo Teste4', content: 'Welcome to the jungle baby4', img: "produtoTeste.jpg", url: "./teste"},
    {id: 5, title: 'Titulo Teste5', content: 'Welcome to the jungle baby5', img: "produtoTeste.jpg", url: "./teste"},
    {id: 6, title: 'Titulo Teste6', content: 'Welcome to the jungle baby6', img: "produtoTeste.jpg", url: "./teste"},
    {id: 7, title: 'Titulo Teste6', content: 'Welcome to the jungle baby6', img: "produtoTeste.jpg", url: "./teste"},
  ]
  const barracas = (
    <>
      {informacaBarraca.map((barraca)=>
        <Link to={barraca.url}>
        <div className="grid-item" key={barraca.id}>
          <img class="grid-img" alt="" src={imgBase + barraca.img} />
          <h3>{barraca.title}</h3>
          <p>{barraca.content}</p>
        </div>
        </Link>
      )}
    </>
  )
  return (
    <div className="Home" >
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