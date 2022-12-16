
import styled from 'styled-components';
import Logo from '../components/Logo';
import ScreenLogin from '../components/ScreenLogin';
import FotterLogin from '../components/FotterLogin';


function LandingPage() {
    return (
      <ScreenContainer>
            <Logo />
            <ScreenLogin />
            <FotterLogin />
      </ScreenContainer>
    );
  }
  
  export default LandingPage;
  
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