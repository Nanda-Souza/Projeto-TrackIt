import styled from "styled-components"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from "react-router-dom"
import { useContext} from "react";
import LogInContext from "../../contexts/LogInContext";

//const value = 0.66;

export default function Fotter(){
    const { userHabbits } = useContext(LogInContext)
    let percentage = 0

    if(userHabbits === undefined || userHabbits.length === 0){
        percentage = 0
    } else{
        const completed = userHabbits.filter((habit) => habit.done)
        percentage = (completed.length / userHabbits.length) *100
       }


    return (
        
        <FooterGeneral>

            <Link to="/habitos" style={{ textDecoration: "none", color: '#52B6FF'}}>
                <p>Hábitos</p>
            </Link>
       
            <Link to="/hoje" style={{ textDecoration: "none"}} >
                <CircularProgressbar 
                value={percentage} 
                //maxValue={1} 
                //text={`${value * 100}%`}
                text={"Hoje"}
                background
                backgroundPadding={6}
                styles={buildStyles({
                    backgroundColor: "#52B6FF",
                    textColor: "#FFFFFF",
                    pathColor: "#FFFFFF",
                    trailColor: "transparent"
                })} 
            />
            </Link>

            <Link to="/historico" style={{ textDecoration: "none", color: '#52B6FF'}}>
                <p>Histórico</p>
            </Link>
       
            
        </FooterGeneral>
    )
}

const FooterGeneral = styled.footer`
    width: 100%;
    height: 80px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    z-index: 1;
	box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.05);
    p{
        margin-top:30px;
        margin-left:30px;
        margin-right:30px;
     }
    .CircularProgressbar {
		width: 100px;
		height: 100px;
		translate: 0% -30%;
	}
     
    
  `
