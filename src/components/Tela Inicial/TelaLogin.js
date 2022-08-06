import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

import logo from "../../assets/img/logo-pag-inicial.svg"
import styled from 'styled-components';

export default function Login ({ setToken, setImg }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    //const [dados, setDados] = useState("");

    function logar (event) {
        event.preventDefault();

        const info = {
           email,
           password,
       }
        
   
            //useEffect(() => {
                const request =  axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login`, info);
        
                request.then(resposta => {
                 
                    console.log(resposta.data)
                    setToken(resposta.data.token)
                    setImg(resposta.data.image)
                    navigate("/habitos")
                });

                request.catch(console.log("deu ruim login"))
            //}, []);

   
   //console.log(info) 
   }

    return (
        <Content>
        
            <Foto src={logo}/>
            
            <Form>

              
                    <input onChange={(e) => setEmail(e.target.value)} value={email}  type="email" placeholder="email" />

                    <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="senha" />
                

                <button onClick={logar} type="submit"> Entrar </button>

                <Link to="/cadastro"> <h1>Não tem uma conta? Cadastre-se!</h1> </Link>            

            </Form>
        </ Content>
    )
}

const Content = styled.div`
    display:flex;
    align-items: center;
    flex-direction: column;
    width: 80%;
    margin-top: 5px;

    input {
        width: 303px;
        height: 45px;
        margin-bottom: 5px;
        border-radius: 5px;
        border: 1px solid #D4D4D4;
        
    }

    input::placeholder {
        font-style: italic;
        font-size: 20px;
        color: #DBDBDB;
        display:flex;
        align-items: center;
        padding-left: 10px;
        box-sizing: border-box;

    }

    button {
        width: 310px;
        height: 45px;
        margin-bottom: 5px;
        border-radius: 5px;
        border: none;
        background-color: #52B6FF;
        color: white;
    }

    h1 {
        color: #52B6FF;
        margin-top: 25px;
    }
`;

const Foto = styled.img`
    width: 180px;
    height: 178px;
    margin-top: 68px;
`;

const Form = styled.form`
    display:flex;
    flex-direction: column;
    align-items: center;
    margin-top: 33px;
` 


