import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import AboutBody from '../components/body/SobreEmpresaBody/AboutBody';
import FluxosProcessos from '../pages/FluxosProcessos';
import ConceitosFundamentais from '../pages/ConceitosFundamentais';

const AppRoutes: React.FC = () => (

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/sobre' element={<AboutBody />} />
      <Route path='/fluxos' element={<FluxosProcessos />}/>
      <Route path='/conceitos' element={<ConceitosFundamentais/>}/>
    </Routes>

)

export default AppRoutes;
