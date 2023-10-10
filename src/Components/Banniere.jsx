const Banniere = ({ image, texte }) => {
  return (
    <div className="banniere-accueil">
      <img src={image} alt="Banniere accueil" className="banniere-img" />
      <p className="banniere-texte">{texte}</p>
    </div>
  );
};

export default Banniere;
