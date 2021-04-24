import React, { useEffect } from "react";

function ElementalJoias(){
    useEffect(() => {
        window.open("https://lojaelemental.com.br/", "_blank");  }, []);

        return(
            <div>
                <h2>Loja Elemental</h2>
                <p>Se por acaso não abrir automaticamente a página acesse <a target='_blank' rel="noreferrer" href="https://lojaelemental.com.br/">Link da Elemental</a></p>
            </div>
        );
    
}
export default ElementalJoias