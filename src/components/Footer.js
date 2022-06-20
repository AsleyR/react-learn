import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  return (
    <footer>
      <p>Copyright Asley R. &copy; 2022</p>
      {location.pathname !== "/About" && <Link to="/about">About</Link>}
    </footer>
  );
};

export default Footer;
