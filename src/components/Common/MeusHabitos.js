import { useState } from 'react';
import styled from 'styled-components';
import AddHabit from '../Habitos/AddHabit'

export default function MeusHabitos ( {token}) {

    const [addHabit, setAddHabit] = useState(false);

    function setTrue () {
        if (addHabit === false) {
            setAddHabit(true)
        } else { setAddHabit(false) }
    }


    return (
           <>
           
           <Content>
            <h1>Meus habitos</h1>
            <button onClick={setTrue}>+</button>
           </Content>

           {addHabit ? <AddHabit setTrue={setTrue} token={token} /> : null}
           
           </>
    )
}


const Content = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'Lexend Deca', sans-serif;
    margin: 28px 20px;

    h1 {
        color: #126BA5;
    font-size: 22.98px;
   
    }

    button {
        width: 40px;
        height: 35px;
        border-radius: 4.64px;
        border: none;
        background-color: #52B6FF;
        color: white;
        font-size: 30px;
}
`

