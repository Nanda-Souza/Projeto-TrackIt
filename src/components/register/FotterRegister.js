import styled from "styled-components"
import { Link } from "react-router-dom"


export default function FotterRegister(){
    
    return (
        <FotterReg>

        <Link to="/" style={{ color: '#52B6FF'}}>
            <h1>Já tem uma conta? Faça login!</h1>
        </Link>

        </FotterReg>
    )
}

const FotterReg = styled.div`
    display: flex;
    align-items: center;
    margin: 20px 0 20px 0;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    color: #52B6FF;
    text-decoration: underline;
`