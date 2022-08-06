import styled from 'styled-components';
import dayjs from 'dayjs';

export default function SaveHabit () {

    return (
        <>
        
         <Card>
            <h1>Nome do habito vindo da api</h1>
            {dayjs().weekday(0)}
         </Card>

        </>
    )
}

const Card = styled.div`
    width: 340px;
    height: 91px;
    background-color: white;
    border-radius: 5px;
`
