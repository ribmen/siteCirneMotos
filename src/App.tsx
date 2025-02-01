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

library.add(fas, far, fab);




const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop/>
      <Layout>
        <GlobalStyles />
        <Header />
        <AppRoutes />
        <Footer />
      </Layout>
    </Router>
  );
};

export default App;

