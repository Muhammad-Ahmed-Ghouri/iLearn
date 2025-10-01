import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-img" />
          <span>iLearn</span>
        </div>
        <ul className="nav-links">
          <li>
            <a
              onClick={() => {
                console.log("Home");
              }}
              href="/"
            >
              Home
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                console.log("Products");
              }}
              href="/"
            >
              Products
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                console.log("About");
              }}
              href="/"
            >
              About
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                console.log("Contact");
              }}
              href="/"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
