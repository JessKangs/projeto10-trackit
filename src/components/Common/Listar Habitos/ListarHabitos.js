import styled from 'styled-components';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import WeekDay from './WeekDay';
import weekDays from '../WeekDays';
import EraseHabit from '../../Habitos/EraseHabit';
import ColorWeekD from "../../context/ColorWeekD"

export default function ListarHabitos ( { data, token } ) {
  const [list, setList] = useState([])

    return (
        <Background>

            {data.length === 0 ?

                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
    
                :

                data.map( (habitInfo, index) =>

                <CardHabitoSalvo key={index}>

                    <Header>

                      <h2>{habitInfo.name}</h2>
                      <EraseHabit token={token} habit={habitInfo.id} />

                    </Header>

                     <Semana>

                     <WeekDay data={habitInfo} key={index}  />

                     </Semana>

                 </CardHabitoSalvo>
                 
                              )}

        </Background>
    )

}


const CardHabitoSalvo = styled.div`
    width: 340px;
    height: 95px;
    border-radius: 5px;
    background-color: #FFFFFF;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    padding: 10px 13px 2px 13px;
    box-sizing: border-box;

    h1 {
       margin-left: 15px;
       margin-top: 13px;
       font-size: 20px;
       color: #666666;
    }
`

const Semana = styled.div`
        display:flex;
        align-items: center;
        width: 250px;
        justify-content: space-between;
        margin-top: 8px;
`

const Background = styled.div`
    background-color: #E5E5E5;
    height: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-bottom: 110px;

`
const Header = styled.div`
    width: 315px;
    display:flex;
    flex-direction: row;
    justify-content: space-between;

    h2 {
        font-size: 20px;
        color: #666666;
        margin: 5px 0 5px 0;
    }

    img {
        height: 15px;
    }
`