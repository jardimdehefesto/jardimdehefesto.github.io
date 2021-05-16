import './Pages.css';
import Footer from '../Footer';
import barracas from '../data/barracas'
import {Texto , Container, Espacador} from "./../Theme.js"
import {
  // BrowserRouter as Router,
  // HashRouter,
  // Switch,
  // Route,
  Link
} from "react-router-dom";



var informacaBarraca = barracas
// function Agora() {
//   const imgBase = "/image/";
//   const barracas = (
//     <>
//       {informacaBarraca.map((barraca)=>
//         <Link to={'./' + barraca.url}>
//         <div className="grid-item" key={barraca.id}>
//           <img className="grid-img" alt="" src={imgBase + barraca.img} />
//           <h3>{barraca.title}</h3>
//           <p>{barraca.content}</p>
//         </div>
//         </Link>
//       )}
//     </>
//   )
//   return (
//     <div className="background-amarelo" >
//       <Container> 
//         <div 
        
//         className="grid-container"
        
//         >
//             {barracas}
//         </div>
//       </Container>
//       <Footer />
//     </div>
//   );

// }

function Agora() {
    return(
        <Container>
            <Espacador/>
            <Texto>Praça principal das antigas cidades gregas, local em que se instalava o mercado e que muitas vezes servia para a realização das assembleias do povo; formando um recinto decorado com pórticos, estátuas etc, era também um centro religioso.</Texto>
        </Container>
    )
}

export default Agora;