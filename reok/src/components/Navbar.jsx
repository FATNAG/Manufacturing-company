import profileImage from '../media/images/profile-image-01.png';
import logo from '../media/images/recycle-icon-01.png'
import 'assets/css/navbar.css';
import {Link} from 'react-router-dom';
import { useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = ({title}) => {
  // This useEffect is for the color change of the navbar when you scroll down and the button up appearence
  useEffect (() => {
    window.addEventListener("scroll", function () {
      var navbar = document.querySelector("nav");
      navbar.classList.toggle("sticky", window.scrollY > 0);
    });
  }, []);

  const { loginWithRedirect } = useAuth0();

  const { logout } = useAuth0();

  return (
    <nav className="navbar shadow" id="navbar">
      <button
        className="btn-bars"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
      >
        <span className="fas fa-bars"></span>
      </button>
      <h2 className="text-3xl font-bold">{title}</h2>
      <div className="page-title">
        <div className="image-profile">
          <button onClick={() => loginWithRedirect()}>
            <img src={profileImage} alt='Profile'/>
          </button>
        </div>
        <div className="description-profile">
          <h5>Jofay-zs</h5>
          <p>Desarrollador</p>
        </div>
      </div>
      <div
        className="offcanvas offcanvas-start sidebar"
        tabIndex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div className="offcanvas-header sidebar-brand">
          <div className="sidebar-brand__brand">
            <img src={logo} alt="Reok brand" />
            <span>
              <h1 className="fs-4 text-black">REOK</h1>
            </span>
          </div>
          <div>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
        </div>
        <div className="offcanvas-body sidebar-menu">
          <ul>
            <li>
              <Link to="/Home" id="home">
                <i className="fas fa-home"></i>
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/Sales" id="sales">
                <i className="fas fa-hand-holding-usd"></i>
                <span>Sales</span>
              </Link>
            </li>
            <li>
              <Link to="/Products" id="products">
                <i className="fas fa-meteor"></i>
                <span>Products</span>
              </Link>
            </li>
            <li>
              <Link to="/Vendors" id="vendors">
                <i className="fas fa-address-book"></i>
                <span>Vendors</span>
              </Link>
            </li>
            <li>
              <Link to="/Users" id="users">
                <i className="fas fa-users"></i>
                <span>Users</span>
              </Link>
            </li>
            <li>
              <button
                className="text-gray-100 font-bold w-full flex items-center justify-start text-lg"
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                <i className="fas fa-sign-out-alt mr-5 ml-3"></i>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
