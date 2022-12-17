import styled from "styled-components"
import { Link } from "react-router-dom"

export default function FotterLogin(){
    
    return (
        <FotterLog>
   
        <Link to="/cadastro" style={{ color: '#52B6FF'}}>
            <h1>Não tem uma conta? Cadastre-se!</h1>
        </Link>

        </FotterLog>
    )
}

const FotterLog = styled.div`
    display: flex;
    align-items: center;
    margin: 20px 0 20px 0;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    color: #52B6FF;
    
`