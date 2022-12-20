import styled from "styled-components"

export default function AddHabbits(){
    
    return (
        <HabitAdd>
            <div className="habit-add">

            <InputHabit>
                <input 
                type="habit-name" 
                placeholder="nome do hábito" 
                required
                />
            </InputHabit>
           
        
             <ul>
                <li className="day">D</li>
                <li className="day">S</li>
                <li className="day">T</li>
                <li className="day">Q</li>
                <li className="day">Q</li>
                <li className="day">S</li>
                <li className="day">S</li>
                <li className="day">D</li>
              </ul>

            </div>

            <ButtonList>

                <button className="cancel">Cancelar</button>
                <button className="save">Salvar</button>

            </ButtonList>

        </HabitAdd>
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
