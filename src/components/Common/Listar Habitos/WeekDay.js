import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import weekDays from "../WeekDays";

export default function WeekDay ({ data }) {
    const [id, setId] = useState('')
    const [color, setColor] = useState(false);

    return (
        weekDays.map((value, index) => 
                <DiaSemana color={color} key={index} >
                <h2>{value.diaSemana}</h2>
                </DiaSemana>)
    )
        
    

}

const DiaSemana = styled.div`
        width: 30px;
        height: 30px;
        border-radius: 5px;
        border: 1px solid #D4D4D4;
        display:flex;
        align-items: center;
        justify-content: center;
        background-color: ${(props) => props.color ? "#CFCFCF" : "white"};

        h2 {
            font-size: 20px;
            color: ${(props) => props.color ? "white" : "#DBDBDB"}
        }
`