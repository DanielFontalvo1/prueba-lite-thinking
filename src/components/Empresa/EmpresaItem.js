import React from "react";
import {useNavigate} from "react-router-dom";

import * as EmpresaServer from './EmpresaServer';

const EmpresaItem = ({ empresa, listEmpresas }) =>{

    const history = useNavigate();
    
    //Metodo que se comunica con EmpresaServer para eliminar una empresa
    const handleDelete = async (empresaId) =>{
        await EmpresaServer.deleteEmpresa(empresaId);
        listEmpresas();
    };
    
    return(
        <tr>
            <th scope="col">{empresa.id}</th>
            <td>{empresa.nombre_empresa}</td>
            <td>{empresa.direccion}</td>
            <td>{empresa.nit}</td>
            <td>{empresa.telefono}</td>
            <td className="d-flex justify-content-center">
                <button onClick={()=> history(`/updateEmpresa/${empresa.id}`)} className="ms-2 btn btn-dark">Editar</button>
            </td>
            <td ><button onClick={()=>empresa.id && handleDelete(empresa.id) } className="btn btn-dark">Eliminar</button></td>
        </tr>
    );
};

export default EmpresaItem;