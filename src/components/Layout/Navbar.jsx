import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container-navbar">
      <Link to="/home">
        <Button>Home</Button>
      </Link>
      <Link to="/characters">
        <Button>Characters</Button>
      </Link>
      <Link to="/contact">
        <Button>Contact</Button>
      </Link>
      <Link to="/about">
        <Button>About</Button>
      </Link>
    </div>
  );
};

export default Navbar;
