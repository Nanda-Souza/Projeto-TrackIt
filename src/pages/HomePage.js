import styled from 'styled-components';
import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';
import ScreenHome from '../components/home/ScreenHome';



function HomePage() {
  
    return (
      <ScreenContainer>
            <Header />
            <ScreenHome />
            <Footer />
      </ScreenContainer>
    );
  }
  
  export default HomePage;
  
  const ScreenContainer = styled.div`
  background-color: #f5f2f4;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 0px;
  `