import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ThreeDots } from  'react-loader-spinner'




export default function ScreenLogin(){
    const [loading, setLoading] = useState(false)
    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUSerPassword] = useState("")
    const navigate = useNavigate()


    
function sendLogin(e){
        e.preventDefault()

        const loginData = {email: userEmail, password: userPassword}
        setLoading(true)
        
        const url_post = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"
        const promise = axios.post(url_post, loginData)

        promise.then( res => {
            console.log(res)
            setLoading(false)
            navigate("/hoje")
            
        })
        promise.catch( err => { 
            //console.log(err.response.data)
            alert(err.response.data.message)
            setLoading(false)
        })

        
        
 }
    
    return (
<form onSubmit={sendLogin}>
    <InputLogin>

        <InputLista>
            <input
                type="email"
                value={userEmail} 
                onChange={e => setUserEmail(e.target.value)}
                placeholder="email"
                required
                disabled={loading}                
                />

            <input 
                type="password" 
                value={userPassword} 
                onChange={e => setUSerPassword(e.target.value)}
                placeholder="senha" 
                required
                disabled={loading}
                />


            <LogIn isLoading={loading}>
                {loading ? (
                    <ThreeDots 
                        height="40" 
                        width="40" 
                        color="#ffffff" 
                        />
                    ) : (
                    <p id="button" className="button-log">Entrar</p>
                )}
            
            </LogIn>


        </InputLista>

    </InputLogin>
</form>
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
        font-size: 20px;
        color: #AFAFAF;  
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

const LogIn = styled.button` 
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
        display: flex;
        justify-content: center;
        align-items: center;
             
        `
        