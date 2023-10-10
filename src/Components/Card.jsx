import { NavLink } from "react-router-dom";

const Card = ({ id, title, cover }) => {
  return (
    <NavLink key={id} to={"/fiche/" + id}>
      <div id={id} className="card">
        <img src={cover} alt="Fiche logement" className="card-img" />
        <div className="card-dark"></div>
        <p className="card-title">{title}</p>
      </div>
    </NavLink>
  );
};

export default Card;
