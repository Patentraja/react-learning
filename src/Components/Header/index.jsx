import {Link} from "react-router-dom"
import "./header.css"
function Header () {
  return <>
  
  <Link to="/">Home</Link>
  <Link to="/about">Aboutus</Link>
  <Link to="/FAQ">FAQ</Link>

  
  </>
}

export default Header;
