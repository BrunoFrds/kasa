import logoFooter from "../Assets/Images/LogoFooter.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <img src={logoFooter} alt="Logo" />
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
