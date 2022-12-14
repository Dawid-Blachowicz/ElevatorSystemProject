import Selector from "../components/Selector";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import styled from "@emotion/styled";
import React from "react";

const  App = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <HeaderContainer>
          <HeaderText>Elevator system</HeaderText>
          <Text>Podaj liczbę wind oraz pięter</Text>
        </HeaderContainer>

        <Container>
          <Selector/>
        </Container>
      </Grid>
    </Grid>
  );
}

export default App;

const HeaderContainer = styled(Container)`
  width: 100vw;
  height: 200px;
  text-align: center;
`;

const HeaderText = styled.p`
  font-size: 50px;
`;

const Text = styled.p`
  font-size: 30px;
`;

