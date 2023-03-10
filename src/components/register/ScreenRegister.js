import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ThreeDots } from  'react-loader-spinner'

export default function ScreenRegister(){
    const [loading, setLoading] = useState(false)
    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [userName, setUserName] = useState("")
    const [userImage, setUserImage] = useState("")
    const navigate = useNavigate()

function sendRegister(e){
        e.preventDefault()

        const loginData = {email: userEmail, password: userPassword, name: userName, image: userImage}
        setLoading(true)
        console.log(loginData)
        
        const url_post = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up"
        const promise = axios.post(url_post, loginData)

        promise.then( res => {
            console.log(res)
            setLoading(false)
            navigate("/")
            
        })
        promise.catch( err => { 
            //console.log(err.response.data)
            alert(err.response.data.message)
            setLoading(false)
        })
}

    
    return (
<form onSubmit={sendRegister}>
    <InputRegister>

        <InputList>
            <input
                data-test="email-input"
                type="email"
                value={userEmail} 
                onChange={e => setUserEmail(e.target.value)}
                placeholder="email"
                required
                disabled={loading}         
                />

            <input
                data-test="password-input"
                type="password"
                value={userPassword} 
                onChange={e => setUserPassword(e.target.value)}
                placeholder="senha" 
                required 
                disabled={loading}     
                />

            <input
                data-test="user-name-input" 
                type="name"
                value={userName} 
                onChange={e => setUserName(e.target.value)}
                placeholder="nome"
                required
                disabled={loading}        
                />

            <input
                data-test="user-image-input" 
                type="url"
                value={userImage} 
                onChange={e => setUserImage(e.target.value)}
                placeholder="foto" 
                required
                disabled={loading}     
                />

            <Registration isLoading={loading}>
                {loading ? (
                    <ThreeDots 
                        height="40" 
                        width="40" 
                        color="#ffffff" 
                        />
                    ) : (
                    <p 
                        data-test="signup-btn"
                        id="button" className="button-regis">Cadastrar</p>
                    )}
            </Registration>


        </InputList>

    </InputRegister>
</form>
    )
}



const InputRegister = styled.ul`
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

const InputList = styled.li`
padding: 15px;
display: flex;
flex-direction: column;
align-items: center;

`

const Registration = styled.button` 
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