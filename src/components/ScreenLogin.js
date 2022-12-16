import styled from "styled-components";

export default function ScreenLogin(){
    return (
<InputLogin>

<InputLista>
            <input
                type="text-email"
                placeholder="email"
                />

            <input 
                type="text-senha" 
                placeholder="senha" 
                />


            <LogIn>
            <p id="button" className="button-log">Entrar</p>
            </LogIn>


</InputLista>

</InputLogin>
    )
}



const InputLogin = styled.ul`
    input {
        width: 303px;
        height: 45px;
        border: 1px solid #DBDBDB;
        border-radius: 5px;  
        margin-bottom: 6px;
        outline: none;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;  
        font-size: 18px;
        color: #52B6FF;  
        ::placeholder {
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            padding-left:15px;
            margin-left: 12px;
            color: #DBDBDB;
            font-weight: 400;
            font-size: 20px;
        }
        `

const InputLista = styled.li`
padding: 15px;
display: flex;
flex-direction: column;
align-items: center;

`

const LogIn = styled.button` {
        width: 310px;
        height: 45px;
        background-color: #52B6FF;
        border: 10px solid #52B6FF;
        border-radius: 5px;  
        margin-bottom: 6px;  
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        color: #FFFFFF;
        }
        `