import { Link, useNavigate } from "react-router-dom"
import React from "react"

const NavbarUser = () => {
    const navigate = useNavigate

    function handleNavigation(route) {
        if (route === "Booking") {
            navigate("/Booking");
        } else if (route === "OrderRiwayat") {
            navigate("/OrderRiwayat");
        } else {
        }
    }

    return(
        <nav className="navbar bg-light fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                <h2>
                <b>MyZet</b>
                </h2>
                </a>
                <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
                >
                <span className="navbar-toggler-icon" />
                </button>
                <div
                className="offcanvas offcanvas-end"
                tabIndex={-1}
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                >
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                    Selamat Datang
                    </h5>
                    <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                    />
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="" >
                            <Link to={"/Booking"}>
                        Booking
                        </Link>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="">
                        Profile
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="" >
                            <Link to={"/OrderRiwayat"}>
                        Detail Order
                        </Link>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="">
                            <Link to={"/Landing"}>
                        Logout
                        </Link>
                        </a>
                    </li>
                
                    
                    </ul>
                </div>
                </div>
            </div>
        </nav>

    )
}

export default NavbarUser