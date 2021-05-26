import './Pages.css';
import './Agora.css';
import {Container, Espacador} from "./../Theme.js"
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
const postAgora = [
    `
# Ágora
(ἀγορά; "assembleia", "lugar de reunião", derivada de ἀγείρω, "reunir") 

substantivo feminino
Praça principal das antigas cidades gregas, local em que se instalava o mercado e que muitas vezes servia para a realização das assembleias do povo; formando um recinto decorado com pórticos, estátuas etc, era também um centro religioso.

Definições de Oxford Languages

O termo grego significa reunião de qualquer natureza, geralmente empregada por Homero como uma reunião geral de pessoas. Surge na sequência da queda da civilização micénica e constitui-se como um centro cultural, político e comercial de cada cidade. A ágora era uma parte essencial da constituição dos primeiros estados gregos.
Era considerada o coração da cidade de Atenas antiga, a praça central da cidade. Lugar para prática religiosa, esportiva, comercial e governamental, onde todos os cidadãos, de qualquer classe social, transitavam, faziam compras, declaravam seus impostos e suas obrigações jurídicas.
Além disso, os cidadãos também assistiam as apresentações e os debates de filósofos e pensadores, como Temístocles, Péricles e Sócrates. Portanto, foi um espaço público de fundamental importância na constituição do espaço urbano e democrático da Atenas clássica.
Normalmente era um espaço livre com edificações, onde as pessoas costumavam ir. É nela que o cidadão grego convive com o outro para comprar coisas nas feiras, onde ocorrem as discussões políticas e os tribunais populares: é, portanto, o espaço da cidadania, configuradas pela presença de mercados e feiras livres em seus limites, assim como por edifícios de caráter público. Fisicamente, inicialmente a ágora era apenas um espaço definido por marcos de pedra em vez de construções, como a Ágora de Atenas.
`
]


function Agora() {
    return(
        <Container>
            <Espacador/>
            <ReactMarkdown className={'Markdown'} remarkPlugins={[gfm]} children={postAgora[0]}/>
            <Espacador/>
            
            <Espacador/>
        </Container>
    )
}

export default Agora;