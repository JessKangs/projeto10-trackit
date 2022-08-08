import { useState } from "react";
import styled from "styled-components";
import weekDays from "../Common/WeekDays";

export default function DiaHabito ({selecionados, day, index}) {
    
        const [color, setColor] = useState(false)

    function choose () {

        if(color === true) {
        setColor(false)
        } else { setColor(true)}

    }

    return (

        
            <DiaSemana color={color} key={index} onClick={() => 
            {
                const jaSelecionado = selecionados.some(dia => dia === day.id)
    
                if (!jaSelecionado) selecionados.push(day.id);

                choose()
                
            }
    
            }>
            <h2>{day.diaSemana}</h2>
            </DiaSemana> 

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
        background-color: ${(props) => !props.color ? "white" : "#DBDBDB"};

        h2 {
            font-size: 20px;
            color: ${(props) => props.color ? "white" : "#DBDBDB"};
        }
`
