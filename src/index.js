import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Route, Routes } from 'react-router-dom';

//Componente importados:
import Navbar from './components/Navbar/Navbar';
import EmpresaList from './components/Empresa/EmpresaList';


import 'bootstrap/dist/css/bootstrap.min.css'; 
import './index.css';
import EmpresaForm from './components/Empresa/EmpresaForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar/>
    <div>
      <Routes>
        <Route exact path="/" element={<EmpresaList/>}/>
        <Route path="/empresaForm" element={<EmpresaForm/>}/>
        <Route path="/updateEmpresa/:id" element={<EmpresaForm/>} />
      </Routes>
    </div>
  
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
