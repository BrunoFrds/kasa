import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <nav>
        <NavLink to="/" className="lien">
          Accueil
        </NavLink>
        <NavLink to="/apropos" className="lien">
          A propos
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
