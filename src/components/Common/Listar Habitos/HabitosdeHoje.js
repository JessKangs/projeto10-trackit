import axios from 'axios';
import styled from 'styled-components';
import botao from "../../../assets/img/Group.svg"

export default function HabitosdeHoje ( { habitInfo, index, token, setDone, done } ) {

    console.log(habitInfo)

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

        
        function check () {

            const request = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitInfo.id}/check`, {}, config)

        request.then(setDone(+ 1))
        }
        
   
        function uncheck () {

            const request = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitInfo.id}/uncheck`, {}, config)

            request.then(setDone(done > 0 ? done - 1 : ''))
        }
         
    

    return (     

                    <CardHabitoSalvo key={index}>
    
                          <Header>
    
                            <h1>{habitInfo.name}</h1>

                            <Sequencia>
                            <h2>{`Sequência atual: ${habitInfo.currentSequence}`}</h2>
                            <h2>{`Sequência highest: ${habitInfo.highestSequence}`}</h2>
                            </Sequencia>
    
                          </Header>
                                    

                        <Buttonbox done={habitInfo.done} onClick={ !habitInfo.done ? check : uncheck}>
                        <img src={botao} />
                        </Buttonbox>
                         

    
                     </CardHabitoSalvo>
                                  )

}


const CardHabitoSalvo = styled.div`
    width: 340px;
    height: 95px;
    border-radius: 5px;
    background-color: #FFFFFF;
    margin-bottom: 10px;
    align-items: center;
    display: flex;
    flex-direction: row;
    padding: 0px 13px 13px 13px;
    box-sizing: border-box;
   

    h1 {
       margin-left: 15px;
       
       font-size: 20px;
       color: #666666; 
       word-break: break-all;
       width: 200px;
    }
    
`

const Buttonbox = styled.div`
    width: 90px;
    height: 69px;
    background-color: ${(props) => props.done ? '#8FC549' : '#e7e7e7' };
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;

    img {
        width: 36px;
    }
`

const Sequencia = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5px;

    h2 {
        font-size: 13px;
        align-items: left;
        margin-top: 2px;
    }

`

const Header = styled.div`
    width: 315px;
    display:flex;
    flex-direction: column;

    h1 {
        font-size: 20px;
        color: #666666;
        margin: 0 0 5px 0;
    }

    img {
        height: 15px;
    }
`
