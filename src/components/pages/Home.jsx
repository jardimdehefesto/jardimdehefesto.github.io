import './Home.css';
import { Grid, Container } from '@material-ui/core'
import Header from '../Header'
import Footer from '../Footer'

function Home() {
  const informacaBarraca = [
    {id: 1, title: 'Titulo Teste', content: 'Welcome to the jungle baby'},
    {id: 2, title: 'Titulo Teste2', content: 'Welcome to the jungle baby2'},
    {id: 3, title: 'Titulo Teste3', content: 'Welcome to the jungle baby3'},
    {id: 4, title: 'Titulo Teste4', content: 'Welcome to the jungle baby4'},
    {id: 5, title: 'Titulo Teste5', content: 'Welcome to the jungle baby5'},
    {id: 6, title: 'Titulo Teste6', content: 'Welcome to the jungle baby6'},
  ]
  const barracas = (
    <Grid className="conteudo-barraca" item xs>
      {informacaBarraca.map((barraca)=>
        <div key={barraca.id}>
          {barraca.title}<br/>
          {barraca.content}
        </div>
      )}
    </Grid>
  )
  return (
    <div className="Home">
      <Header />
      <Container>
        <Grid 
        
        className="barraca"
        
        >
            {barracas}
        </Grid>
      </Container>
      <Footer />
    </div>
  );

}

export default Home;