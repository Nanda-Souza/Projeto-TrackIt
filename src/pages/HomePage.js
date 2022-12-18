import styled from 'styled-components';
import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';

function HomePage() {
    return (
      <ScreenContainer>
            <Header />
            <Footer />
      </ScreenContainer>
    );
  }
  
  export default HomePage;
  
  const ScreenContainer = styled.div`
  background-color: #E5E5E5;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
  `