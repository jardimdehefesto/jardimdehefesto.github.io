import "./Pages.css";
import React from "react";
import { Container, Paper } from '@material-ui/core';

function Sobre() {

    return (
        <React.Fragment>
            <div className="background-amarelo full-height">
                <Container>
                    
                        <Paper className="paperSobre">
                            <h1>Lorem Ipsun</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed tellus at nisl dapibus mattis vitae non odio. Vivamus ante est, dignissim ac finibus quis, viverra pretium turpis. Proin vitae venenatis velit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed risus augue, dignissim id laoreet vitae, convallis quis lorem. In posuere ex neque, non pharetra ante mollis non.
                    </p>
                        </Paper>
                    
                </Container>

            </div>
        </React.Fragment>
    );
}
export default Sobre;