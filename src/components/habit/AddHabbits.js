import { useState } from "react"
import styled from "styled-components"
import axios from "axios";
import { useContext } from "react";
import LogInContext from "../../contexts/LogInContext";

export default function AddHabbits({ setAddHab }){
    const { config } = useContext(LogInContext)
    const dayList = ["D", "S", "T", "Q", "Q", "S", "S"]
    const [selectDays, setselectDays] = useState([]);
    const [habitName, setHabitName] = useState("")
    const [loading, setLoading] = useState(false)
    
    
    function selectDay(day){
        if (selectDays.includes(day) && !loading) {
            setselectDays(current => current.filter((dayList) => dayList !== day )   
        )} else if (!loading){
            setselectDays([...selectDays, day])
        } 
                }
    function disableHabit(){
        setAddHab(false);
    }            

    function createHabit(e){
        e.preventDefault()
        const habitData = {name: habitName, days: selectDays }
        console.log(habitData)
        setLoading(true)

        const url_post = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
        const promise = axios.post(url_post, habitData, config)

        promise.then( res => {
            console.log(res)
            setLoading(false)
            setAddHab(false);
        })
        promise.catch( err => { 
            //console.log(err.response.data)
            alert(err.response.data.message)
            setLoading(false)
        })        
    }

    return (
        <form onSubmit={createHabit}>
        <HabitAdd>
            <div className="habit-add">

            <InputHabit>
                <input 
                type="habit-name" 
                placeholder="nome do hábito"
                value={habitName}
                onChange={e => setHabitName(e.target.value)}
                required
                disabled={loading} 
                />
            </InputHabit>
           
        
             <ul>
             {dayList?.map((l, index) => (
                <li 
                    key={index} 
                    className={`${selectDays.includes(index) ? "day-check" : "day"}`}
                    onClick={() => selectDay(index)}>{l}
                </li>

             ))}               
              </ul>

            </div>

            <ButtonList>

                <button className="cancel" onClick={disableHabit}>Cancelar</button>
                <button className="save">Salvar</button>

            </ButtonList>

        </HabitAdd>
    </form>
    )
}

     
const HabitAdd = styled.div`
    display: flex;
    flex-wrap:wrap;
    width: 100%;
    height: 180px;
    border-radius:5px;
    margin-bottom:10px;
    background-color:#FFFFFF;
    color:#DBDBDB;
    .habit-add{
    width: 100%;
    margin-right:35px;
    }
    ul{
        display: flex;
        margin-left:15px;
    }
    li{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        margin-right: 4px;
          
    }
    .day-check{
        color:#FFFFFF;
        background-color: #dbdbdb;
    }
    .day{
        color:#dbdbdb;
`
const InputHabit = styled.div`
input {
    display: flex;
    width: 100%;
    height: 45px;
    border: 1px solid #DBDBDB;
    border-radius: 5px;  
    margin: 15px;
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
        font-size: 20px;
    }        
`

const ButtonList = styled.div`
display: flex;
margin-left:auto;
.save{
   width: 84px;
   height: 35px;
   margin-bottom: 10px;
   margin-left:23px;
   margin-right: 16px;
   background-color: #52B6FF;
   border:none;
   border-radius:5px;
   font-style: normal;
   font-weight: 400;
   font-size: 15px;
   color: #FFFFFF;
}
.cancel{
    height: 35px;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    color: #52B6FF;
    border:none;
    background-color: #ffffff;
}
`
