import React, { useEffect, useState } from 'react';
import * as EmpresaServer from './EmpresaServer';

//Componets:
import EmpresaItem from './EmpresaItem';

const EmpresaList = () => {
    const [empresas,setEmpresas]= useState([]);

    const listEmpresas = async () =>{
        try{
            const res = await EmpresaServer.listEmpresas();
            const data = await res.json();
            setEmpresas(data.empresas);
        }catch(error){
            console.log(error);
        }
    }
    
    //UseEffect es un intermediario para ejecutar codigo javaScript nativo
    useEffect(()=>{
        listEmpresas();
    },[]) 
    /*UsseEffect siempre espera un cambio o actualización el arreglo vacio sirve para 
    que lo haga una vez*/

    return (
        <div className='container my-4'>
            <table className='bordes table table-bordered' >
                <thead>
                    <tr>
                        <th scope='col'>ID</th>
                        <th scope='col'>Nombre Empresa</th>
                        <th scope='col'>Dirección</th>
                        <th scope='col'>NIT</th>
                        <th scope='col'>Telefono</th>
                    </tr>
                </thead>
                <tbody>
                        {empresas.map((empresa)=>(
                            <EmpresaItem key={empresa.id} empresa={empresa} listEmpresas={listEmpresas} />
                        ))}
                    </tbody>
            </table> 
        </div>
    );
};

export default EmpresaList;