import "./Pages.css";
import React from "react";
import { Container, Paper, Avatar, Card, CardContent, CardActions, Typography, Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    paper: {
        backgroundColor: "rgba(255, 229, 112, 0.651)",
        marginTop: "20px",
        padding: '10px',
    },
    title: {
        fontSize: '3rem',
    },
    miniCard: {
        maxWidth: '15%',
        display: 'grid',
        gridTemplateColumns: ['auto', 'auto', 'auto', 'auto'],
        textAlign: "center",
    },
    miniCardContent:{
        display: 'flex',
        alignItems: "center",
        justifyContent: "center",
    }
})


);

function Sobre() {

    const classes = useStyles();

    return (
        <React.Fragment>
            <div className="background-amarelo full-height">
                <Container>
                    <div>
                        <Paper className={classes.paper}>
                            <h1>Sobre a Iniciativa</h1>
                            <p>
                                A iniciativa Jardim de Hefésto foi criada para trazer os artesãos para o nosso espaço, como uma feira livre virtual onde eles podem ofertar seus produtos. Queremos levar a tecnologia aqueles que confeccionam itens tão mágicos para nós, criando um local onde  nasçam novas amizades, o apoio entre todos cresça e possamos levar itens exclusivos com alta qualidade a aqueles que não tinham conhecimento sobre.
                            </p>
                        </Paper>
                    </div>
                    <Paper className={"paperSobre"}>
                        <Typography className={classes.title} component="h1" >
                            Quem somos:
                        </Typography>
                        <Card className={classes.miniCard}>
                            <CardContent className={classes.miniCardContent}>
                                <Avatar className={classes.large} alt="Conde Laus" src={'/jardimdehefesto/image/avatar/CondeLaus.jpg'} />
                            </CardContent>
                            <CardActions  className={classes.miniCardContent}>
                                <a target="_blank" href="http://www.facebook.com">
                                <Button size="small">Entre em contato</Button>
                                </a>
                            </CardActions>
                        </Card>
                    </Paper>

                </Container>

            </div>
        </React.Fragment>
    );
}
export default Sobre;