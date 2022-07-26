import React, { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";

import * as  EmpresaServer from  './EmpresaServer';

const EmpresaForm = () => {

    const params=useParams();
    const history = useNavigate();

    const initialState = { id: 0, nombre_empresa:"", direccion:"", nit: 0, telefono:0 };
    
    const [empresa, SetEmpresa] = useState(initialState);

    const handleInputChange = (e) =>{
        SetEmpresa({...empresa, [e.target.name]: e.target.value});
    };
    
    //funcion para el evento submit, me permite resgitrar o actualizar
    const handleSubmit =async (e) =>{
        e.preventDefault();
        try{
            if(!params.id){
                let res;
                res = await EmpresaServer.registerEmpresa(empresa);
                const data = await res.json();
                alertMensaje(data.message, "registrada");
            }else{
                let res;
                res = await EmpresaServer.updateEmpresa(params.id, empresa);
                const data = await res.json();
                alertMensaje(data.message, "actualizada")
                if(data.message==="Succes"){
                   history("/");
                }
            } 
        }catch(error){
            console.log(error);
        }
    };

    const getEmpresa = async(empresaId) => {
        try {
            const res = await EmpresaServer.getEmpresa(empresaId);
            const data = await res.json();
            const {nombre_empresa, direccion, nit, telefono} = data.empresas;
            SetEmpresa({nombre_empresa, direccion, nit, telefono});
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (params.id){
            getEmpresa(params.id);
        }
         // eslint-disable-next-line
    },[]);
    
    //Funcion verifica si el mensaje de registro o actualización fue exitoso
    const alertMensaje = (mensaje, tipo) =>{
        if(mensaje==="Succes"){
            alert(`Empresa ${tipo} correctamente`)
            SetEmpresa(initialState);
        }else{
            alert("Ya existe una empresa con el nit registrado");
        }
    }

 
    return(
        <div className="col-md-3 mx-auto">
            <h2 className="mb-3 text-center">Empresa</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Nombre Empresa</label>
                    <input type="text" name="nombre_empresa" value={empresa.nombre_empresa} onChange={handleInputChange} className="form-control" minLength="2" maxLength="50" autoFocus required/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Direccion</label>
                    <input type="text" name="direccion" value={empresa.direccion} onChange={handleInputChange} className="form-control" minLength="8" maxLength="70" autoFocus required/>
                </div>
                <div className="mb-3">
                    <label className="form-label">NIT</label>
                    <input type="number" name="nit" value={empresa.nit} onChange={handleInputChange} className="form-control" min="1" autoFocus required/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Telefono</label>
                    <input type="number" name="telefono" value={empresa.telefono} onChange={handleInputChange} className="form-control" min="1" autoFocus required/>
                </div>
                <div className="d-grid gap-2">
                    {params.id ? (
                      <button className="btn btn-block btn-dark">Actualizar</button>
                    ) : (
                        <button className="btn btn-block btn-dark">Registar</button> 
                    )}
                </div>
            </form>
        </div>
    )
}

export default EmpresaForm;