const urlApi = "http://127.0.0.1:8000/api/empresas/"

//Metodo obtener todas las empresas registrada hasta la fecha 
export const listEmpresas = async () => {
    return await fetch(urlApi);
};


//Obtener un registro de empresa
export const getEmpresa = async (empresaId) => {
    return await fetch(`${urlApi}${empresaId}`);
};

//Metodo agregar una empresa a la base de datos
export const registerEmpresa = async (newEmpresa) =>{
    return await fetch(urlApi, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            "nombre_empresa": String(newEmpresa.nombre_empresa).trim(),
            "direccion": String(newEmpresa.direccion).trim(),
            "nit": parseInt(newEmpresa.nit),
            "telefono": parseInt(newEmpresa.telefono),
        })
    });
};

//Actualizar un registro empresa
export const updateEmpresa = async (empresaId, updatedEmpresa) =>{
    return await fetch(`${urlApi}${empresaId}`, {
        method: 'PUT',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            "nombre_empresa": String(updatedEmpresa.nombre_empresa).trim(),
            "direccion": String(updatedEmpresa.direccion).trim(),
            "nit": parseInt(updatedEmpresa.nit),
            "telefono": parseInt(updatedEmpresa.telefono),
        })
    });
};



//Metodo eliminar empresa
export const deleteEmpresa = async (empresaId) =>{
    return await fetch(`${urlApi}${empresaId}`, {
        method: 'DELETE',

        
    });
};
