import '../App.css'
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return ( 
        <footer id="footer" >
        <ul className="nav bg-light border-bottom justify-content-center align-items-center" style={{width: '100%'}}>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-dark">Home</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-dark">About</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-dark">Upload</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-dark">Download</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-dark">Contact</a></li>
          <li className="nav-item ms-auto me-4"><a href="#"><FaTwitter/></a></li>
          <li className="nav-item me-4"><a href="#"><FaInstagram/></a></li>
          <li className="nav-item me-4"><a href="#"><FaLinkedin/></a></li>
          <li className="nav-item me-4"><a href="#"><FaGithub/></a></li>
        </ul>
      </footer>
     );
}
 
export default Footer;