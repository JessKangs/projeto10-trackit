import { useState, useEffect, useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import weekDays from "../WeekDays";

export default function WeekDay ({ token }) {
    const [color, setColor] = useState(false);

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    
        useEffect(() => {
    
                const request =  axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config);
    
                 request.then(resposta => 
                    
                        resposta.data.map((data, i) => 
                        weekDays.map((weekDays, index) => {
    
                            data.days.map((habitDays, i) => weekDays.id === habitDays ? setColor(true) : '') } )) )  
    
                 request.catch(console.log("deu ruim listar"))
             
    
    
       }, []);

    return (
        weekDays.map((value, index) =>
                <DiaSemana color={color} key={index} >
                    <h2>{value.diaSemana}</h2>
                </DiaSemana>
                )
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