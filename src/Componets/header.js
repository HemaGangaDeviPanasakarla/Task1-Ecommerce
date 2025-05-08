import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const handleNavigation = (id) => {
    const pageList = ["homeSection", "productSection", "cartSection"];
    pageList.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
   
        element.style.display = sectionId === id ? "block" : "none";
      }
    });
  };

  const toggleMenu = () => {
    document.getElementById("navLinks").classList.toggle("show");
  };

  return (
    <div className="header">
      <div className="brand">
        <span className="brand-text">Andhra Sweets</span>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <span>☰</span>
      </div>
      <div className="nav-links" id="navLinks">
        <span className="nav-item" onClick={() => handleNavigation("homeSection")}>
          Home
        </span>
        
        <span className="nav-item" onClick={() => handleNavigation("productSection")}>
          Products
        </span>
        <span className="nav-item cart-icon">
          <FontAwesomeIcon icon={faShoppingCart} />
          <span id="cartCount" className="cart-count">
            0
          </span>
        </span>
      </div>
    </div>
  );
}

export default Header;

