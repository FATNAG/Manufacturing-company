import profileImage from '../media/images/profile-image-01.png';
import logo from '../media/images/recycle-icon-01.png'
import 'assets/css/navbar.css';
import {Link} from 'react-router-dom';
import { useEffect } from 'react';

const Navbar = ({title}) => {
  // This useEffect is for the color change of the navbar when you scroll down and the button up appearence
  useEffect (() => {
    window.addEventListener("scroll", function () {
      var navbar = document.querySelector("nav");
      navbar.classList.toggle("sticky", window.scrollY > 0);
    });
  }, []);

  return (
    <nav class="navbar shadow" id="navbar">
      <button
        class="btn-bars"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
      >
        <span class="fas fa-bars"></span>
      </button>
      <a href="#section" onclick="toggleMenu();" class="goTop">
        <i class="fas fa-arrow-alt-circle-up"></i>
      </a>
      <h2>{title}</h2>
      <div class="page-title">
        <div class="image-profile">
          <Link to='/Login'>
            <img src={profileImage} alt="Image profile" />
          </Link>
        </div>
        <div class="description-profile">
          <h5>Jofay-zs</h5>
          <p>Desarrollador</p>
        </div>
      </div>
      <div
        class="offcanvas offcanvas-start sidebar"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header sidebar-brand">
          <div class="sidebar-brand__brand">
            <img src={logo} alt="Reok brand" />
            <span>
              <h1 class="fs-4 text-black">REOK</h1>
            </span>
          </div>
          <div>
            <button
              type="button"
              class="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
        </div>
        <div class="offcanvas-body sidebar-menu">
          <ul>
            <li>
              <Link to='/Home' id="home">
                <i class="fas fa-home"></i>
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to='/Sales' id="sales">
                <i class="fas fa-hand-holding-usd"></i>
                <span>Sales</span>
              </Link>
            </li>
            <li>
              <Link to='/Products' id="products">
                <i class="fas fa-meteor"></i>
                <span>Products</span>
              </Link>
            </li>
            <li>
              <Link to='/Vendors' id="vendors">
                <i class="fas fa-address-book"></i>
                <span>Vendors</span>
              </Link>
            </li>
            <li>
              <Link to='/Users' id="users">
                <i class="fas fa-users"></i>
                <span>Users</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
