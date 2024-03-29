import { useState } from "react";
import styled from "styled-components";

export default function DiaHabito ({setSelecionados, selecionados, day, index}) {
    
    const [color, setColor] = useState(false)
    const diasSelecionados = [];

    function choose () {

        if(color === true) {
        setColor(false)
        } else { setColor(true)}

    }
   
    return (

        
            <DiaSemana color={color} key={index} onClick={() => 
            {
                const jaSelecionado = diasSelecionados.some(dia => dia === day.id)
    
                if (!jaSelecionado) diasSelecionados.push(day.id);
                
                setSelecionados([...selecionados, diasSelecionados[0]])
                
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
