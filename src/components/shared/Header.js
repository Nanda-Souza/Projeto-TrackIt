import styled from "styled-components"
import { useContext } from "react"
import LogInContext from "../../contexts/LogInContext"


export default function Header(){
    const { loginInfo } = useContext(LogInContext)
       
   
    
    return (
        <HeaderGeneral data-test="header">
            <p className= "textHeader">TrackIt</p>
            <img src={loginInfo.image} />

        </HeaderGeneral>
    )
}

const HeaderGeneral = styled.div`
    width: 100%;
    height: 70px;
    background-color: #126BA5;
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-family: 'Playball';
    font-weight: 400;
    font-size: 40px;
    color: #FFFFFF;
    padding: 10px;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    p{
        display: flex;
        justify-content: center;
        align-items:center;
        margin-left: 20px;
    }
    img {
        width: 55px;
        height: 55px;
        border-radius: 50%;
        margin-right: 16px;
        margin-top: 7px;
    }
  `