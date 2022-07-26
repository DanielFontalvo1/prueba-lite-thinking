
import {Link} from 'react-router-dom';

const Navbar = ()=>{
    
    

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark letra">
            <div className="container-fluid">
                <Link className="letra navbar-brand" to="/">
                    Lite Thinking
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item letra">
                            <Link className="letra nav-link active" id="home" aria-current="page" to="/">
                                Inicio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="letra nav-link" to="/EmpresaForm">
                                Agregar Empresa
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;