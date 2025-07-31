import { FaGithub, FaInstagram, FaLinkedin, FaSquare } from "react-icons/fa"
import logo from "../../assets/PrLogo.png"
import { FaSquareXTwitter } from "react-icons/fa6"
import { SiLeetcode } from "react-icons/si";


const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} className="mx-2" width={65} height={65} 
               alt="Logo" />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/pratik-raj-549b23255/"
           target="_blank"
           rel="noopener noreferrer"
           aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://github.com/pratikraj143"
           target="_blank"
           rel="noopener noreferrer"
           aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://leetcode.com/u/pratikraj143aj/"
           target="_blank"
           rel="noopener noreferrer"
           aria-label="x">
          <SiLeetcode />
        </a>
        <a href="https://www.instagram.com/pratikraj_pr/"
           target="_blank"
           rel="noopener noreferrer"
           aria-label="instagram">
          <FaInstagram />
        </a>
      </div>
    </nav>
  )
}

export default Navbar