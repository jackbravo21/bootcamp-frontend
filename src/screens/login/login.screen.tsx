import React from "react";
import { Container, Grid } from "@mui/material";
import login from "../../assets/icons/logo.svg";
import {Logo, Wrapper} from "./login.styled";
import Form from "./components/form/form.component";

export default function Login()
{

    //fragment nao vai ser renderizado na tela, nao eh impresso, ao contrario da div;
    return(
        <React.Fragment>
            {/* comentario */}

    <Container>
        <Wrapper container justifyContent={"center"}>

            <Grid item xs={3} justifyContent={"center"}>
                <Grid container justifyContent={"center"}>
                    <Logo src={login} alt={"Netflix Logo"} />
                    <Form />
                </Grid>
            </Grid>

        </Wrapper>

    </Container>

        {/*<Button primary={true}>Entrar</Button>*/}
        {/*<Button primary={false}>Entrar</Button>*/}
        {/*<Button secondary={true}>Sair</Button>*/}

        </React.Fragment>

    )


}