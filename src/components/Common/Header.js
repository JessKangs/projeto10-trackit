import styled from 'styled-components';

import logoNome from '../../assets/img/TrackIt.svg'

export default function Header ( { img }) {
    return (
        <Headerr>

            <img src={logoNome} alt="trackit logo"/>

            <img className='foto-perfil' src={img} alt="foto perfil"/>

        </Headerr>
    )
}

const Headerr = styled.div`
    width: 100%;
    height: 70px;
    background-color: #126BA5;
    display:flex;
    align-items: center;
    justify-content: space-between;

    img {
        width: 97px;
        height: 49px;
        margin-left: 18px;
        
    }

    .foto-perfil{
        border-radius: 50%;
        height: 50px;
        width: 50px;
        object-fit: cover;
        margin-right: 20px;
    }

`;