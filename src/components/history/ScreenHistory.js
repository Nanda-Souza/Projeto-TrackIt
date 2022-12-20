import styled from "styled-components"

export default function ScreenHistory(){
    
    return (
        <HistoryContainer>
            
            <div>
              <h2>Histórico</h2>
            </div> 
            <div className="text">
            <p className="history-text">Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </div> 

        </HistoryContainer>
    )
}


const HistoryContainer = styled.div`
    width: 100%;
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
        margin-left:15px
    }
    .history-text{
        color:#666666;
        font-size:19px;
        margin:15px;
    `
