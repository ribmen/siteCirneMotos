import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import AboutBody from '../components/body/SobreEmpresaBody/AboutBody';
import FluxosProcessos from '../pages/FluxosProcessos';
import ConceitosFundamentais from '../pages/ConceitosFundamentais';
import Organograma from '../pages/Organograma';
import { Pops } from '../components/body/Pops/Pops';
import Creditos from '../pages/Creditos';
import { PopsComercial } from '../components/body/Pops/PopsComercial';
import { PopsAdministrativo } from '../components/body/Pops/PopsAdministrativo';
import AboutBody2 from '../components/body/SobreEmpresaBody/AboutBody2';


const AppRoutes: React.FC = () => (

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/sobre' element={<AboutBody2 />} />
      <Route path='/fluxos' element={<FluxosProcessos />}/>
      <Route path='/conceitos' element={<ConceitosFundamentais/>}/>
      <Route path='/organogramaDCO' element={<Organograma/>}/>
      <Route path='/pops' element={<Pops/>}/>
      <Route path='/creditos' element={<Creditos/>}/>
      <Route path='/popscomercial' element={<PopsComercial/>}/>
      <Route path='/popsadministrativo' element={<PopsAdministrativo/>}/>

    </Routes>

)

export default AppRoutes;
