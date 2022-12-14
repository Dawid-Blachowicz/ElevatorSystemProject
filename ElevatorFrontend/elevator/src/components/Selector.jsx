import React, { useState } from "react";
import { Container } from "@mui/material";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

function Selector() {
    const [elevatorsNumber, setElevatorsNumber] = useState('');
    const [floorsNumber, setFloorsNumber] = useState('');

    const handleClick = (e) => {
        const data=[elevatorsNumber, floorsNumber]
        console.log(data)

        fetch("http://localhost:8080/api/system/elevatorsNumber", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body:JSON.stringify(elevatorsNumber)
        }).then(() => {
            console.log("elevators num sent")
        })

        fetch("http://localhost:8080/api/system/floorsNumber", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body:JSON.stringify(floorsNumber)
        }).then(() => {
            console.log("floors num sent")
        })
    }
    let navigate = useNavigate();
    const changeRoute = () => {
        navigate("/simulation");
    }

    return (
        <SelectorContainer className="floorsNumber">
            <TextField id="elevators-number" label="Liczba wind" variant="filled"
                value = {elevatorsNumber}           
                onChange = {(e) => setElevatorsNumber(e.target.value)}
            />
            <TextField id="floors-number" label="Liczba pięter" variant="filled"
                value = {floorsNumber}           
                onChange = {(e) => setFloorsNumber(e.target.value)}
            />
            <ApplyButton
                onClick = {() => {
                    changeRoute();
                    handleClick();
                }}
            >
                zatwierdź
            </ApplyButton>
        </SelectorContainer>
    );
}

export default Selector;

const ApplyButton = styled(Button)`
    color: #FFF;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    transition: 0.4s;
    flex: 1 1 33.333%;
    max-width: 55.333%;
    background-color: #131a26;
    margin: 3px;
`;

const SelectorContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`;