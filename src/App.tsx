import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import AppRoutes from './routes/AppRoutes';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Layout from './components/Layout';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import ScrollToTop from './components/utils/ScrollToTop';
import styled from 'styled-components';

library.add(fas, far, fab);

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`


const App: React.FC = () => {
  return (
    <>
    <Router>
      <ScrollToTop/>
      <AppContainer>
        <Layout>
          <GlobalStyles />
          <Header />
          <AppRoutes />
          <Footer />
        </Layout>
      </AppContainer>
    </Router>
    </>
  );
};

export default App;

