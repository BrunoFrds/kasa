import Banniere from "../Components/Banniere";
import banniereHome from "../Assets/Images/BanniereHome.png";
import Card from "../Components/Card";
import ListeLogement from "../Assets/Api/logements.json";

const Accueil = () => {
  return (
    <div className="accueil">
      <div className="accueil-banniere">
        <Banniere image={banniereHome} texte="Chez vous, partout et ailleurs" />
      </div>
      <div className="card-list">
        {ListeLogement.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </div>
    </div>
  );
};

export default Accueil;
