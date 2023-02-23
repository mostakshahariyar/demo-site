import React from 'react';
import 'boxicons';
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {
        return (
                <div>
                        <nav className="navbar p-0 navbar-expand-md me-3 container-fluid">
        <Link to='/' className="navbar-brand fs-3 ms-3 text-secondary">Name</Link>
        <button className="navbar-toggler text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#btn">
                <box-icon name="menu"></box-icon> 
        </button>

<div className="collapse navbar-collapse " id="btn">
        <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                        <NavLink to="/" className="nav-link mx-4 text-secondary fs-5">Home</NavLink>
                </li>
                <li className="nav-item">
                        <NavLink to="/about" className="nav-link mx-4 text-secondary  fs-5">About</NavLink>
                </li>
                <li className="nav-item">
                        <NavLink to="/service" className="nav-link mx-4 text-secondary fs-5 fs-md-2">Service</NavLink>
                </li>
                <li className="nav-item">
                        <NavLink to="/contact" className="nav-link mx-4 text-secondary  fs-5">Contact</NavLink>
                </li>
        </ul>

</div>
</nav>
                </div>
        );
};

export default Navbar;