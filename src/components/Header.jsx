import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <nav className="nav">
      <Link to={"/"}>
        <FontAwesomeIcon icon={faCoffee} size="lg" />
      </Link>
    </nav>
  );
};

export default Header;
