import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="full-width">
        <div className="nav-logo">logo</div>
        <div className="nav-links">
          <Link to="/">Try Demo</Link>
          <Link to="/">Login</Link>
          <Link to="/" className="nav-register">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
