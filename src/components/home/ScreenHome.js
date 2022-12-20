import styled from "styled-components"
import TodayHabbits from "./TodayHabbits";
import 'dayjs/locale/pt-br';
import LogInContext from "../../contexts/LogInContext";
import { useContext } from "react";

export default function ScreenHome(){
    require('dayjs/locale/pt-br');
    const dayjs = require('dayjs');
    const todaysDate = dayjs().locale("pt-br").format("dddd DD/MM");
    const { percentage} = useContext(LogInContext)
    
    return (
        <HomeContainer>
          <h2 data-test="today">{todaysDate}</h2> 
          <p data-test="today-counter" className="">Nenhum hábito concluído ainda</p> 
          <TodayHabbits />

        </HomeContainer>
    )
}

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top:108px;
    margin-left:30px;
    margin-right:30px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    h2{
        color: #126BA5;
        font-size: 23px;
        margin-bottom: 5px;
    }
    p{
        color: #BABABA;
        font-size: 18px;
        margin-bottom: 30px;
    }
`