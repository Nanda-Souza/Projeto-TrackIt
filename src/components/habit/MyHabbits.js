import styled from "styled-components"
import axios from "axios";
import { useContext, useEffect, useState} from "react";
import LogInContext from "../../contexts/LogInContext";

export default function MyHabbits(){
    const { config, userHabbits} = useContext(LogInContext)
    const [ habbits, setHabbits ] = useState(undefined)
    

    useEffect(() => {
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
        
        const promise = axios.get(URL, config);
        
        promise.then( res => 
            setHabbits(res.data)
            
        )}, [deleteHabit]);
        
        if (userHabbits === undefined) {
            return(
                <>
                    <p>Carregando...</p>
                </>
            )
          }
        
        function deleteHabit(id) {
            
            const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/" + id 
            const delHabit = window.confirm(
                "Deseja deletar este hábito?"
            )

            if (delHabit) {
                const promise = axios.delete(URL, config);
                promise.then( res => {
                    console.log(URL)
                                        
                })
                
            }


            
        }
    
    return (
        <>
        {habbits?.map((habbits) => (
            <HabitList data-test="habit-container" key={habbits.id}>
            <div className="habit-select">
            <p data-test="habit-name" className="select-habit">{habbits.name}</p>
 
             <ul>
               <li data-test="habit-day" className={`${habbits.days.includes(0) ? "day-check" : "day"}`}>D</li>
               <li data-test="habit-day" className={`${habbits.days.includes(1) ? "day-check" : "day"}`}>S</li>
               <li data-test="habit-day" className={`${habbits.days.includes(2) ? "day-check" : "day"}`}>T</li>
               <li data-test="habit-day" className={`${habbits.days.includes(3) ? "day-check" : "day"}`}>Q</li>
               <li data-test="habit-day" className={`${habbits.days.includes(4) ? "day-check" : "day"}`}>Q</li>
               <li data-test="habit-day" className={`${habbits.days.includes(5) ? "day-check" : "day"}`}>S</li>
               <li data-test="habit-day" className={`${habbits.days.includes(6) ? "day-check" : "day"}`}>S</li>               
             </ul>
             </div>

             <div data-test="habit-delete-btn" className="delete" onClick={() => deleteHabit(habbits.id)}>
               <img src="assets/delete.png"/>
             </div>   

       </HabitList>
            
        ))}

    {(habbits === undefined || Object.keys(habbits).length === 0)  && (
        <HabitStart>

            <p className="select-habit">Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>

        </HabitStart>)
        }       

        </>
    )
}

const HabitList = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;  
    width: 100%;
    height: 94px;
    border-radius:5px;
    margin-bottom:10px;
    background-color:#FFFFFF;
    habit-select{
    display: flex;
    flex-direction: column;  
    }
    .select-habit{
        color:#666666;
        font-size:19px;
        margin:15px;
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
    }
    .delete{
        margin:15px;
    }
     `
     


const HabitStart = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;  
width: 100%;
height: 94px;
border-radius:5px;
margin-bottom:10px;
.select-habit{
    color:#666666;
    font-size:19px;
    margin:15px;
}
`
