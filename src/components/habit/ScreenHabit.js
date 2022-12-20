import styled from "styled-components"
import MyHabbits from "./MyHabbits"
import AddHabbits from "./AddHabbits"
import { useState } from "react"

export default function ScreenHabit(){
  const [addHab, setAddHab] = useState(false)

  function enableHabit() {
    setAddHab(true)
  }
    
    return (
        <HabitContainer>
            
          <div className="container-habit">  
            <div>
              <h2>Meus hábitos</h2>
            </div> 
            <div className="add" onClick={enableHabit}>
              <img src="assets/more.png" />
            </div> 
          </div>
          
          { addHab && (
            <AddHabbits setAddHab={setAddHab}/>)
          }
          
          <MyHabbits />

        </HabitContainer>
    )
}

const HabitContainer = styled.div`
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
        margin-top:5px;
    }
    .container-habit{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-bottom:20px;
    }
    .add{
        width:40px;
        height:35px;
        background-color: #52B6FF;
        border-radius:5px;
     }
     img{
        margin-left: 13px;
        margin-top: 11px;
    }
     `