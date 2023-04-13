import CSE427 from "../pages/CSE427";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
    <div class="container-fluid">

      <a class="navbar-brand" href="#">Vertospace</a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item mx-5">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item mx-5">
            <a class="nav-link" href="#">About Us</a>
          </li>
          <li class="nav-item dropdown mx-5">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Study Materials
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">CSE423</a></li>
              <li><a class="dropdown-item" href="#">INT222</a></li>
              <li><a class="dropdown-item" href="#">INT252</a></li>
              <li><a class="dropdown-item" href="/CSE427">CSE427</a></li>
              <li><a class="dropdown-item" href="/PEA">PEA</a></li>
              <li><a class="dropdown-item" href="/Upload">Upload Files</a></li>
              <li><a class="dropdown-item" href="/Download">Download Files</a></li>
            </ul>
          </li>
          <li class="nav-item mx-5">
            <a class="nav-link" href="#">Contact Us</a>
          </li>
          <li class="nav-item mx-5">
            <a class="nav-link" href="/Upload">Upload Files</a>
          </li>
        </ul>

        <Link to = "/login">
        <button class="btn btn-outline-light me-2" type="submit">Login / Sign Up</button>
        </Link>
      </div>
    </div>
  </nav>
  );
}

export default NavBar;
