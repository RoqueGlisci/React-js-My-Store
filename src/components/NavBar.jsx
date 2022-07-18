
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import Categories from './Categories';

function NavBar(produc) {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid px-5">
                <img src={"../img/img_1.png"} alt="padel" style={{ width: "3rem" }} />
                <Link to="/" className="navbar-brand text-white ps-3 fs-2" href="#/">My Store</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-center " id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 px-5 ">
                        <li className="nav-item ">
                            <Link to="/inicio" className="nav-link active text-white" aria-current="page" href="#/">Inicio</Link>
                        </li>
                        <Categories />
                    </ul>
                    <span className="navbar-text" >
                        <button type="button" className="btn btn-outline-info">
                            <Link to="/cart" className="dropdown-item" href="#/"><CartWidget /></Link>
                        </button>
                    </span>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;