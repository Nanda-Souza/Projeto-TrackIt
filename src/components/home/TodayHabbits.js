import styled from "styled-components"
import axios from "axios";
import { useContext, useEffect} from "react";
import LogInContext from "../../contexts/LogInContext";

export default function TodayHabbits(){
    const { config, userHabbits, setUserHabbits } = useContext(LogInContext)
    

    useEffect(() => {
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
        const promise = axios.get(URL, config);
        
        promise.then( res => 
            setUserHabbits(res.data)
            
        )}, []);
        
        if (userHabbits === undefined) {
            return(
                <>
                    <p>Carregando...</p>
                </>
            )
          }
    
    return (
        <>
        {userHabbits?.map((userHabbits) => (
            <TodayContainer data-test="today-habit-container" key={userHabbits.id} >
                <div>
                    <p data-test="today-habit-name" className="read">{userHabbits.name}</p>
                    <p data-test="today-habit-sequence" className="sequence">Sequência atual: 3 dias Seu recorde: 5 dias</p>
                </div>
                <div data-test="today-habit-check-btn" className={`${userHabbits.done ? "check-green" : "check-gray"}`}>
                    <img src="assets/check.png" />
                </div>                
            </TodayContainer>
            
        ))}        
        </>
    )
}

const TodayContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 94px;
    border-radius:5px;
    margin-bottom:10px;
    background-color:#FFFFFF;
    }
    .read{
        color:#666666;
        font-size:19px;
        margin:15px;
    }
    .sequence{
        color:#666666;
        font-size:12px;
        margin-top:7px;
        margin-left:15px;
        width: 146px;
    }
    .check-gray{
        width:70px;
        height:70px;
        background-color: #E7E7E7;
        margin:15px;
        border-radius:5px;
    }
    .check-green{
        width:70px;
        height:70px;
        background-color: #8FC549;
        margin:15px;
        border-radius:5px;
    }
    img{
        margin-left: 20px;
        margin-top: 20px;
    }
    
`