import logoHeader from "../Assets/Images/LogoHeader.png";
import Navigation from "../Components/Navigation";

const Header = () => {
  return (
    <header>
      <img src={logoHeader} alt="logo" />
      <Navigation />
    </header>
  );
};

export default Header;
