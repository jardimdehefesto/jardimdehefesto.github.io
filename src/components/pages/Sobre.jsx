
import React from "react";
import { Container, Paper, Avatar, Card, CardContent, CardActions, Typography, Button, createMuiTheme } from '@material-ui/core';
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
        alignItems: "center",
        justifyContent: "center",
    },
    paperSobre: {
        display: 'flex',
    },
    title: {
        fontSize: '3rem',
        textAlign: 'center',
        fontWeight: '400',
        paddingBottom: '20px',
    },
    cardTitle: {
        color: "orange",
    },
    miniCard: {
        width: '200px',
        display: 'flex',
        flexWrap: 'wrap',
        textAlign: "center",
        backgroundColor: "rgba(102, 102, 102, 0.7)",
        alignItems: "center",
        justifyContent: "center",
    },
    miniCardContent: {
        display: 'block',
        alignItems: "center",
        justifyContent: "center !important",
        padding: "15px",
    },
    minicardPhoto: {
        
        width: "70px",
        height: "70px",
    },
    miniCardButton: {
        backgroundColor: "rgba(255, 229, 112, 0.6)",
        color: "#FFFFFF",
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
                            <h1 className={classes.title}>Sobre a Iniciativa</h1>
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
                                <Avatar className={classes.minicardPhoto} alt="Conde Laus" src={'/jardimdehefesto/image/avatar/CondeLaus.jpg'} />

                                <Typography className={classes.cardTitle} component="h2">
                                    Conde Laus
                                </Typography>
                            </CardContent>
                            <CardActions className={classes.miniCardContent}>
                                <a target="_blank" href="http://www.facebook.com">
                                    <Button variant="contained" color="rgba(255, 229, 112, 0.6)" size="small">Entre em contato</Button>
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