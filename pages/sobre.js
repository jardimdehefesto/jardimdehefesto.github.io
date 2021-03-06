import Link from 'next/link';
import { Header } from "/components/Header.js"
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
        paddingTop: "50px",
        paddingBottom: "50px",
        alignItems: "center",
        justifyContent: "center",
        fontSize: '1.8rem',
        // textAlign: 'justify',
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
    },
})


);

export default function Sobre() {
    const classes = useStyles();

    return (
        <>
            <Header/>
            <div className="background-amarelo full-height">
                <Container>
                    <div>
                        <Paper className={classes.paper}>
                            <Container maxWidth="md">
                                <h1 className={classes.title}>Sobre a Iniciativa</h1>
                                <p>
                                O site Jardim de Hefesto tem como objetivo reunir um conjunto de microempreendedores que oferecem os mais diversos produtos e servi??os, como produ????o de j??ias, velas, di??rio m??gico, dentre outras ferramentas m??gicas que favorecem direta ou indiretamente as pessoas que trilham o caminho ocultista.
                            </p>
                                <hr style={{ borderColor: 'rgba(0,0,0,0)' }} />
                                <p>
                                Como representante, Conde Lauds possibilita a ponte entre os profissionais artes??os e o p??blico.
                            </p>
                                <hr style={{ borderColor: 'rgba(0,0,0,0)' }} />
                                <p>
                                O Jardim de Hefesto busca indiv??duos que produzem por prazer art??stico e profissionalmente e que amem o que fazem, desenvolvendo produtos e servi??os ??nicos, feitos com o cora????o.
                            </p>
                            </Container>
                        </Paper>
                    </div>
                    <Paper className={"paperSobre"}>
                        <Typography className={classes.title} component="h1" >
                            Quem somos:
                        </Typography>
                        <Card className={classes.miniCard}>
                            <CardContent className={classes.miniCardContent}>
                                <Avatar className={classes.minicardPhoto} alt="Conde Laus" src={'/image/avatar/CondeLaus.jpg'} />

                                <Typography className={classes.cardTitle} component="h2">
                                    Conde Laus
                                </Typography>
                            </CardContent>
                            <CardActions className={classes.miniCardContent}>
                                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=100067437873548">
                                    <Button variant="contained" color="rgba(255, 229, 112, 0.6)" size="small">Entre em contato</Button>
                                </a>
                            </CardActions>
                        </Card>
                    </Paper>

                </Container>

            </div>
        </>
    );
}
