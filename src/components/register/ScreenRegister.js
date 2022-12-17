import styled from "styled-components";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ThreeDots } from  'react-loader-spinner'



export default function ScreenRegister(){
    
    return (
    <InputRegister>

        <InputList>
            <input
                type="email"
                placeholder="email"             
                />

            <input 
                type="password"
                placeholder="senha" 
                />

            <input 
                type="name"
                placeholder="nome" 
                />

            <input 
                type="url"
                placeholder="foto" 
                />

            <Registration>
                    <p id="button" className="button-regis">Cadastrar</p>
            </Registration>


        </InputList>

    </InputRegister>
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