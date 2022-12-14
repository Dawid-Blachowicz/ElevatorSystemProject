import { Container } from "@mui/system";
import React, { useState, useEffect } from "react";
import Pic from "../images/elevator.jpg"
import styled from "@emotion/styled";

function Elevator({id}) {
    const [elevator, setElevator] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            fetch("http://localhost:8080/api/elevators/" + id)
            .then(res => res.json())
            .then((result) => {
              setElevator(result);

            })
        }, 2000);

        return () => clearInterval(interval);
      }, []);

    return (
        <ElevatorContainer>
            <DisplayContainer>
                Piętro: {elevator}
            </DisplayContainer>
            <DisplayContainer>
                <img src = {Pic} height={160} width={160} />
            </DisplayContainer>
            <DisplayContainer>
                ID windy: {id}
            </DisplayContainer>
        </ElevatorContainer>
    );
}

export default Elevator;

const ElevatorContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width:100
`;

const DisplayContainer = styled(Container)`
    display: flex;
    padding: 10px;
    text-align: center;
    self-align: center;
    justify-content: center;
    background-color: #131a26;
    color: #FFF;
    font-size: 20px;
    font-weight: 300;
    width: 160px;
    max-width:160px;
`;