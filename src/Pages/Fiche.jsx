import { Navigate, useParams } from "react-router-dom";
import ListeLogements from "../Assets/Api/logements.json";
import Carrousel from "../Components/Carrousel";
import Collapse from "../Components/Collapse";
import Tag from "../Components/Tag";
import etoile from "../Assets/Images/Etoile.png";
import etoileVide from "../Assets/Images/EtoileVide.png";

const Fiche = () => {
  const id = useParams();

  const ficheLogement = ListeLogements.find(
    (logement) => logement.id === id.id
  );

  const tagsLogement = ficheLogement?.tags.map((tags, index) => {
    return <Tag key={index} name={tags} />;
  });

  let noteLogement = [];
  let etoilePleine = true;
  for (let index = 0; index < 5; index++) {
    if (index === parseInt(ficheLogement?.rating)) {
      etoilePleine = false;
    }
    if (etoilePleine === true) {
      noteLogement.push(
        <img
          key={index}
          className="etoile"
          src={etoile}
          alt={`${ficheLogement?.rating}/5`}
        />
      );
    } else {
      noteLogement.push(
        <img
          key={index}
          className="etoile"
          src={etoileVide}
          alt={`${ficheLogement?.rating}/5`}
        />
      );
    }
  }

  const equipmentsLogement = ficheLogement?.equipments.map(
    (equipment, index) => {
      return <li key={index}>{equipment}</li>;
    }
  );

  return (
    <>
      {ficheLogement ? (
        <div className="fiche">
          <Carrousel images={ficheLogement?.pictures} />
          <div className="info-logement">
            <div className="title-fiche">
              <h1 className="title-logement">{ficheLogement?.title}</h1>
              <h2 className="location-logement">{ficheLogement?.location}</h2>
            </div>
            <div className="tags-logement">{tagsLogement}</div>
            <div className="host-logement">
              <h2 className="name-host-logement">{ficheLogement?.host.name}</h2>
              <img
                className="img-host-logement"
                src={ficheLogement?.host.picture}
                alt="Propriétaire"
              />
            </div>
            <div className="note-logement">{noteLogement}</div>
            <div className="collapse-fiche">
              <Collapse
                title="Description"
                description={ficheLogement?.description}
              />
              <Collapse title="Equipements" description={equipmentsLogement} />
            </div>
          </div>
        </div>
      ) : (
        <Navigate replace to="/404" />
      )}
    </>
  );
};

export default Fiche;
