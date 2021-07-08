import propagandas from "../data/propagandas";
import styled from 'styled-components'

const Lateral = styled.img`
    width: 15vw;
    right: 0px;
    position: absolute;
    top: 70vh;
`;
var publico = "/image/propaganda/"
var infoPropaganda = propagandas;
var num = 0





export default function PropagandaLateral() {
    
    if(propagandas[0] !== "0"){
    return (
        <>
      <div className="PropagandaLateral">
        <a href={infoPropaganda[0].url} target="_blank" rel="noopener noreferrer" ><Lateral src={publico + infoPropaganda[0].img} /></a>
      </div>
      </>
    );
    }
    else{
      return(
      <>
      
      </>
      )
    }
  }