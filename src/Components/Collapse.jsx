import { useState } from "react";
import flecheVert from "../Assets/Images/FlecheVert.png";

const Collapse = ({ title, description }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="collapse">
      <div className="collapse-header">
        <div className="collapse-title">{title}</div>
        <p className={`collapse-fleche ${open}`} onClick={() => setOpen(!open)}>
          <img src={flecheVert} alt="Ouvrir la liste" />
        </p>
      </div>
      {open && (
        <div className="collapse-description">
          <p className="description">{description}</p>
        </div>
      )}
    </div>
  );
};

export default Collapse;
