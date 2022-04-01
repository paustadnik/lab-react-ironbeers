import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai"

export function Navigation() {
  return (
    <nav className="navbar">
      
      <Link to="/"><AiFillHome className="icon"/></Link>
    </nav>
  );
}
