import { Container } from "@mui/material";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

function FloorsSelector() {
    const [FloorsNumber, setElevatorsNumber] = useState('');
    const [currentFloor, setCurrentFloor] = useState('');

    useEffect(() => {
      fetch("http://localhost:8080/api/system/floorsNumber")
      .then(res => res.json())
      .then((result) => {
        setElevatorsNumber(result);
      })
    })

    const handleClick = value => {
      const data = [value, currentFloor];
      console.log(data)
      fetch("http://localhost:8080/api/elevators/pickup", {
          method: "PUT",
          headers: {"Content-Type":"application/json"},
          body:JSON.stringify(data)
      }).then(() => {
          console.log("elevator sent")
      })
    }

    const createNumbers = () => {
        const numbers = [];
    
        for (let i = 0; i <= FloorsNumber; i++) {        
            numbers.push(<FloorButton onClick={() => handleClick(i.toString())}key={i}>{i}</FloorButton>)
        }
    
        return numbers;
      }

      return (
        <Container className="numbersPanel">
          <Container>
            <TextField id="floor-number" label="Piętro startu" variant="filled"
              value = {currentFloor}           
              onChange = {(e) => setCurrentFloor(e.target.value)}
            />
          </Container>
          <Container className="numbers" >
              {createNumbers()}
          </Container>
        </Container>
      );
}

export default FloorsSelector;

const FloorButton = styled(Button)`
    color: #FFF;
    font-size: 22px;
    padding: 18px;
    cursor: pointer;
    transition: 0.4s;
    flex: 1 1 33.333%;
    max-width: 33.333%;
    background-color: #131a26;
    margin: 3px;
`;

