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
    return (
      <div className="PropagandaLateral">
        <a href={infoPropaganda[num].url} target="_blank" rel="noopener noreferrer" ><Lateral src={publico + infoPropaganda[num].img} /></a>
      </div>
    );
  }