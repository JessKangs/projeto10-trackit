import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

import styled from 'styled-components';
import axios from "axios";

import DiaHabito from "./DiaHabito";
import weekDays from "../Common/WeekDays";
import ListReload from "../context/ListReload";

export default function AddHabit ( { token, setTrue } ) {
    const { reload, setReload } = useContext(ListReload)
    const [nomeHabito, setNomeHabito] = useState("");
    const navigate = useNavigate();

    function rerender () {
        if (!reload) {setReload(true)} else {setReload(false)}
        console.log(reload)
    }


    const [selecionados, setSelecionados] = useState([])

            function salvar (event) {
                event.preventDefault();
                //setTrue()
        
                const info = {
                   name: nomeHabito,
                   days: selecionados
               }
              
                const config = {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
           
                 const request =  axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`, info, config);
                
                    request.then( (resposta) => 
                            console.log(resposta.data));

                    request.then( rerender, setTrue() )
        
                    request.catch( resposta => alert("Não foi possível salvar o hábito"))
                }
    

            return (
                <Card >
                    <input placeholder="nome do habito" onChange={(e) => setNomeHabito(e.target.value)} value={nomeHabito} name="name"/>

                    <Semana>
                    
                    {weekDays.map( (day, index) => 
                        <DiaHabito day={day} index={index} setSelecionados={setSelecionados} selecionados={selecionados}/>)}
                        
                    </Semana>

                   <Botoes>

                    <h1 onClick={() => setTrue()}>Cancelar</h1>
                    <button onClick={salvar}>Salvar</button>

                   </Botoes>
                </Card>
            )

        }

     

const Card = styled.div`
        width: 340px;
        height: 180px;
        background-color: white;
        border-radius: 5px;
        font-family: 'Lexend Deca', sans-serif;
        padding: 20px;
        box-sizing: border-box;
        margin: 0 auto;
        margin-bottom: 13px;

        input {
            border: 1px solid #D4D4D4;
            border-radius: 5px;
            width: 293px;
            height: 45px;
            padding-left: 11px;
            box-sizing: border-box;
            display:flex;
            align-items: center;
            
        }

        input::placeholder {
            color: #DBDBDB;
            font-family: 'Lexend Deca', sans-serif;
            font-size: 20px;
        }

        button {
            font-family: 'Lexend Deca', sans-serif;
            border: none;
            border-radius: 5px;
            background-color: #52B6FF;
            color: #FFFFFF;
            font-size: 16px;
            width: 84px;
            height: 35px;
            
        }

        h1 {
            color: #52B6FF;
            font-size: 16px;
        }

`

const Botoes = styled.div`
        display:flex;
        align-items: center;
        justify-content: space-between;
        float: right;
        margin-top: 30px;
        width: 190px;
`

const Semana = styled.div`
        display:flex;
        align-items: center;
        width: 250px;
        justify-content: space-between;
        margin-top: 8px;
`

const DiaSemana = styled.div`
        width: 30px;
        height: 30px;
        border-radius: 5px;
        border: 1px solid #D4D4D4;
        display:flex;
        align-items: center;
        justify-content: center;
        background-color: white;

        h2 {
            font-size: 20px;
            color: #DBDBDB;
        }
`
