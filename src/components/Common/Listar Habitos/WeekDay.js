import styled from "styled-components";

export default function WeekDay ({ data }) {
    let whichDays = data.days;
    let array = [0,1,2,3,4,5,6];
    let daysFree = [
        <DiaLivre>D</DiaLivre>,
        <DiaLivre>S</DiaLivre>,
        <DiaLivre>T</DiaLivre>,
        <DiaLivre>Q</DiaLivre>,
        <DiaLivre>Q</DiaLivre>,
        <DiaLivre>S</DiaLivre>,
        <DiaLivre>S</DiaLivre>
    ]
    let daysHabit = [
        <DiaHabito>D</DiaHabito>,
        <DiaHabito>S</DiaHabito>,
        <DiaHabito>T</DiaHabito>,
        <DiaHabito>Q</DiaHabito>,
        <DiaHabito>Q</DiaHabito>,
        <DiaHabito>S</DiaHabito>,
        <DiaHabito>S</DiaHabito>
    ]

     for (let i = 0; i < array.length; i++) {
        for(let j = 0; j < whichDays.length; j++) {
            if(array[i] === whichDays[j]) {
                array[i] = "HB"
            }
        }
          
     }

     for(let i = 0; i < array.length; i++) {
        if(array[i] === "HB") {
            array[i] = daysHabit[i]
        } else {
            array[i] = daysFree[i]
        }
     }
       
    return (
        array
        )


}

const DiaLivre = styled.div`
        width: 30px;
        height: 30px;
        border-radius: 5px;
        border: 1px solid #D4D4D4;
        display:flex;
        align-items: center;
        justify-content: center;
        background-color: "white";
        font-size: 20px;
        color: #CFCFCF;
        
`

const DiaHabito = styled.div`
        width: 30px;
        height: 30px;
        border-radius: 5px;
        border: 1px solid #D4D4D4;
        display:flex;
        align-items: center;
        justify-content: center;
        background-color: #CFCFCF;
        font-size: 20px;
        color: white;
        
`