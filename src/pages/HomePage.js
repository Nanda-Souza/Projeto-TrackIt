import styled from 'styled-components';


function HomePage() {
    return (
      <ScreenContainer>
            <h1>Bem Vindo ao TrackIt</h1>
      </ScreenContainer>
    );
  }
  
  export default HomePage;
  
  const ScreenContainer = styled.div`
  background-color: #FFFFFF;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
  `