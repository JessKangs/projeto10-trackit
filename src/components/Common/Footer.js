import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios'

export default function Footer ({token}) {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

        //  useEffect(() => {
        //     const request =  axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config);

        //     request.then(resposta => {
        //        console.log(resposta.data)
        //        //console.log(resposta.data[0].days)
        //       }) }, [])

    const percentage = "Hoje";
    const value = 66;

    return (
        <>

        <Bottom>
            <Habitos> Hábitos </Habitos>
            <Link to="/hoje">
                <CircularProgressbar value={value}
            text={`${percentage}`}
            background
            backgroundPadding={6}
            styles={buildStyles({
            backgroundColor: "#52B6FF",
            textColor: "#fff",
            pathColor: "#fff",
            trailColor: "transparent"
            })}/>
            </Link>
            <h1> Histórico </h1>
        </Bottom>
        </>
    )
}

const Bottom = styled.div`
    width: 100%;
    height: 70px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    display:flex;
    align-items: center;
    justify-content: space-between;

    h1 {
        color: #52B6FF;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 18px;
        margin-right: 28px;
    }

`

const Habitos = styled.div`

    color: #52B6FF;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 18px;
    margin-left: 28px;
`
