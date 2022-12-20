import styled from "styled-components"
import TodayHabbits from "./TodayHabbits";

export default function ScreenHome(){
    
    return (
        <HomeContainer>
          <h2>Segunda, 17/05</h2> 
          <p className="">Nenhum hábito concluído ainda</p> 
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