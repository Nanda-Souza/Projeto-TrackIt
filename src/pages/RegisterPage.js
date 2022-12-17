import styled from 'styled-components';
import Logo from '../components/shared/Logo';
import ScreenRegister from '../components/register/ScreenRegister';
import FotterRegister from '../components/register/FotterRegister';


function HomePage() {
    return (
      <ScreenContainer>
            <Logo />
            <ScreenRegister />
            <FotterRegister />
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