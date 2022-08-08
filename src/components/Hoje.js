import axios from 'axios';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import HabitosdeHoje from './Common/Listar Habitos/HabitosdeHoje';
import Header from "./Common/Header";
import Footer from "./Common/Footer"


export default function Hoje ( { token, img } ) {
    const [data, setData] = useState([])
    const [done, setDone] = useState(0)

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
   
    useEffect(() => {
       
             const request =  axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config);
     
                 request.then(resposta => setData(resposta.data))
     
                 request.catch(console.log("deu ruim listar"))    
     
    
        }, []);   

        console.log(data)


        let porcentagem = done*100/data.length;
         
        console.log(porcentagem)
        console.log(done)

    return (
        <Background>
        
        <Header img={img} />


        <Main> 
            <DiaHoje>
                
                {dayjs().format('dddd, DD/MM')}

                {done === 0 || ''? <Subtitulo done={done}>Nenhum hábito concluído ainda</Subtitulo> : <Subtitulo done={done}>{`${porcentagem}%`} dos hábitos feitos</Subtitulo> }
                
            </DiaHoje>

             
                
                <Backgrounde>
                    {  data.map( (habitInfo, index) => 
                    <HabitosdeHoje 
                    habitInfo={habitInfo} 
                    index={index} 
                    token={token} 
                    key={index}
                    done={done}
                    setDone={setDone}
                    />)}
                </Backgrounde>

            <Footer token={token} />
        </Main> 
        </Background>
    )

}

// const dayjs = require('dayjs') 
// {dayjs().format('DD/MMM/YYY')}

const Main = styled.div`

    p {
        font-size: 18px;
        color: #666666;
        padding: 0 20px;
        margin-top: 29px;
       
    }

`

const Subtitulo = styled.div`
        font-size: 18px;
        font-family: 'Lexend Deca', sans-serif;
        color: ${(props) => props.done === 0 ? '#BABABA' : '#8FC549'};
        margin-top: 5px;
`

const Background = styled.div`
    background-color: #E5E5E5;
    height: 750px;
    overflow-y: hidden;
`

const DiaHoje = styled.div`
    display:flex;
    flex-direction: column;
    align-items: left;
    justify-content: space-between;
    font-family: 'Lexend Deca', sans-serif;
    margin: 28px 20px;
    font-size: 23px;
    color: #126BA5;

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

const Backgrounde = styled.div`
    background-color: #E5E5E5;
    height: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-bottom: 110px;

`