import React from 'react';
import styled from 'styled-components';

import CatPage from './pages/CatPage';

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: Roboto, sans-serif;
`;

function App() {
  return (
    <AppContainer>
      <CatPage />
    </AppContainer>
  );
}

export default App;
