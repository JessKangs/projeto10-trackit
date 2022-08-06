import styled from 'styled-components';
import { useState, useEffect } from 'react';
import axios from 'axios';

import WeekDay from './WeekDay';
import EraseHabit from '../../Habitos/EraseHabit';

export default function ListarHabitos ( { token } ) {
    const [list, setList] = useState("")


        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
   
       
        
       
             useEffect(() => {
                const request =  axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config);
    
                request.then(resposta => {
                   console.log(resposta.data)
                   console.log(resposta.data[0].days)  
                  

                  setList (
                    resposta.data.map( (habitInfo, index) => 
                        

                <CardHabitoSalvo key={index}>

                      <Header>

                        <h2>{habitInfo.name}</h2>
                        <EraseHabit token={token} habit={habitInfo.id} />

                      </Header>
                                
                     <Semana>
                    
                     <WeekDay data={habitInfo} key={index} />
                        
                     </Semana>

                 </CardHabitoSalvo>
                              )
                  )
                
                   //navigate("/")
               })

             
   
               request.catch(console.log("deu ruim listar"))    
   
                }, []);    
        
        


            //      {list.days.map((day) => {
            //           const jaSelecionado = day.some(dia => dia === day.days)

            //           if (jaSelecionado) setColor(true)
                    
            //           console.log(jaSelecionado) 
                    
            //           return "deu bom"
            //   })}   
        //console.log(list)

//const [lista, setLista] = useState(listar)
    return (
        <Background>
            {list}
        </Background>
    )

}

// {listaHabitos.length !== 0 ? console.log(listaHabitos) : <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>}

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
    height: 750px;
    overflow-y: hidden;
    display: flex;
    align-items: center;
    flex-direction: column;
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