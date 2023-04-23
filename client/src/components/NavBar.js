import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { BiUserCircle } from 'react-icons/bi';
import { BiLogOut } from 'react-icons/bi';

function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  const [isOpen, setIsOpen] = useState(false);

  const toggleProfile = () => {
    setIsOpen(!isOpen);
  };

  function handleProfileClick() {}

  return (
    <nav className="navbar navbar-expand-lg sticky-top  bg-white">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Vertospace
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item mx-5">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item mx-5">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item mx-5">
              <Link className="nav-link" to="/notes">
                MyNotes
              </Link>
            </li>
            <li className="nav-item dropdown mx-5">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Study Materials
              </Link>
              <ul className="dropdown-menu">
                {/* <li>
                  <Link className="dropdown-item" to="/CSE423">
                    CSE423
                  </Link>
                </li> */}
                <li>
                  <Link className="dropdown-item" to="/PEA">
                    PEA
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item mx-5">
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>
            </li>
            <li className="nav-item mx-5">
              <Link className="nav-link" to="/Upload">
                Upload Files
              </Link>
            </li>
          </ul>
          {isAuthenticated ? (
            <div className="profile">
              <button className="profile-btn" onClick={toggleProfile}>
                <img
                  className="profile-pic"
                  onClick={handleProfileClick}
                  src={user.picture}
                  alt={user.name}
                />
              </button>
              {isOpen && (
                <div className="profile-tab">
                  <p>{user.name}</p>
                  <button><BiUserCircle/>   View Profile</button>
                  <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><BiLogOut/>   Log Out</button>
                </div>
              )}
            </div>
          ) : (
              <button
                className="btn btn-outline-dark me-2"
                type="submit"
                onClick={() => loginWithRedirect()}
              >
                Login / Sign Up
              </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
