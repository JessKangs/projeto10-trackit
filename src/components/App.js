import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

import TelaLogin from "./Tela Inicial/TelaLogin"
import TelaCadastro from "./Tela Inicial/TelaCadastro"
import Habits from "./Habitos"
import Hoje from "./Hoje";

export default function App () {

const [token, setToken] = useState("");
const [img, setImg] = useState("");

return (
    <BrowserRouter>
        
        <Routes>

        <Route path="/" element={<TelaLogin setToken={setToken} setImg={setImg} /> } />

        <Route path="/cadastro" element={<TelaCadastro /> }/>

        <Route path="/habitos" element={<Habits token={token} img={img} /> }/>

        <Route path="/hoje" element={<Hoje token={token} />} /> 

        {/* <Route path="/historico" element={} />  */}

        </Routes>


    </BrowserRouter>
)
}