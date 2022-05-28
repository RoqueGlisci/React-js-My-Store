import Pad from '../img/img_1.png'

function NavBar() {
    return (
        
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <div className="row pe-5">
                    <div className='col'>
                        <img src={Pad} alt="padel" style={{ width: "3rem" }} />
                    </div>
                    <div className='col'>
                        <a className="navbar-brand text-white ps-5" href="#/" style={{ fontSize: "1.8rem" }}>My Store</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    
                </div>
               
                <div className="row pe-5">

                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item pe-5">
                                <a className="nav-link active text-white" aria-current="page" href="#/">Inicio</a>
                            </li>
                            
                            <li className="nav-item dropdown pe-5">
                                <a className="nav-link dropdown-toggle text-white" href="#/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Productos
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item" href="#/">Remeras</a></li>
                                    <li><a className="dropdown-item" href="#/">Paletas</a></li>
                                    <li><a className="dropdown-item" href="#/">Zapatillas</a></li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link text-white" href="#/">Nosotros</a>
                            </li>

                        </ul>
                    </div>

                </div>
                
            </div>
        </nav>
    );
}

export default NavBar;