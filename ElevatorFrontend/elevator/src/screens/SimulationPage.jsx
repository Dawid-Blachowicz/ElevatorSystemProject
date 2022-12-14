import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import styled from "@emotion/styled";
import FloorsSelector from "../components/FloorsSelector";
import React from "react";
import Elevator from "../components/Elevator";

const  App = () => {
  const [elevatorsNumber, setElevatorsNumber] = useState("");

    useEffect(() => {
    fetch("http://localhost:8080/api/system/elevatorsNumber")
    .then(res => res.json())
    .then((result) => {
      setElevatorsNumber(result);
    })
  })

  const handleElevators = (e) => {
    const elevators = [];
    for(let i = 0; i < elevatorsNumber; i++) {
      elevators.push(<Elevator id={i} key={`elevator-${i}`} />);
    }

    return elevators;
  }

  return (
    <Grid container spacing={4}>
      <Grid item>
        <HeaderContainer>
          <HeaderText>Elevator system</HeaderText>
        </HeaderContainer>
        <Container>
          <FloorsSelector />
        </Container>
        <Container>
          {handleElevators()}
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

