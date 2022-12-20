import styled from 'styled-components';
import ScreenHabit from '../components/habit/ScreenHabit';
import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';

function HabitPage(){
    return(
      <ScreenContainer>
            <Header />
            <ScreenHabit />
            <Footer />
      </ScreenContainer>
    );
  }
  
  export default HabitPage;
  
  const ScreenContainer = styled.div`
  background-color: #f5f2f4;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 0px;
  `