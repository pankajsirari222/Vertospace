import '../App.css'
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return ( 
        <footer id="footer" >
        <ul className="nav bg-light border-bottom justify-content-center align-items-center" style={{width: '100%'}}>
          <li className="nav-item px-2 text-dark me-auto">Vertospace @Apr, 2023 Made by Pankaj Singh Sirari</li>
          <li className="nav-item px-2 text-dark ms-auto me-4">Contact:</li>
          <li className="nav-item me-4"><a href="#"><FaTwitter/></a></li>
          <li className="nav-item me-4"><a href="#"><FaInstagram/></a></li>
          <li className="nav-item me-4"><a href="#"><FaLinkedin/></a></li>
          <li className="nav-item me-4"><a href="#"><FaGithub/></a></li>
        </ul>
      </footer>
     );
}
 
export default Footer;