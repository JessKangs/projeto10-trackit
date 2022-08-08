import ListReload from "./context/ListReload"

import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';

import Footer from "./Common/Footer"
import Header from "./Common/Header"
import MeusHabitos from "./Common/MeusHabitos"
import ListarHabitos from './Common/Listar Habitos/ListarHabitos';


export default function Habits ( { token, img }) {
    const [reload, setReload] = useState(false);
    const [data, setData] = useState('');

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    useEffect(() => {

            

                const request =  axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config);

                 request.then(resposta => 
                    setData(resposta.data) )

                 request.catch(console.log("deu ruim listar"))
             


       }, [reload ? 2 : '']);

    return (
            <ListReload.Provider value={{reload, setReload}}>
                <Background>
        
                    <Header img={img}/>

                    <Main> 
                        <MeusHabitos token={token}/> 

                        <ListarHabitos data={data} token={token} setData={setData} reload={reload} setReload={setReload}/>

                        <Footer />
                    </Main>
                </Background>
            </ListReload.Provider>
    )
}


const Main = styled.div`

    p {
        font-size: 18px;
        color: #666666;
        padding: 0 20px;
        margin-top: 29px;
       
    }
`;

const Background = styled.div`
    background-color: #E5E5E5;
    height: 750px;
`