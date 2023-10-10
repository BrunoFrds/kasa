import { useState } from "react";
import flecheHor from "../Assets/Images/FlecheHor.png";

const Carrousel = ({ images }) => {
  let [imgDisplay, setImgDisplay] = useState(0);
  let imgNumber = images.length;

  const imgPrevious = () => {
    imgDisplay === 0
      ? setImgDisplay(imgNumber - 1)
      : setImgDisplay(imgDisplay - 1);
    return setImgDisplay;
  };

  const imgNext = () => {
    imgDisplay === imgNumber - 1
      ? setImgDisplay((imgNumber = 0))
      : setImgDisplay(imgDisplay + 1);

    return setImgDisplay;
  };

  return (
    <div className="carrousel">
      {images.map((image, index) => {
        return (
          <img
            key={index}
            className={
              index === imgDisplay ? "carrousel-img actif" : "carrousel-img"
            }
            src={image}
            alt="Logement"
          />
        );
      })}
      {imgNumber > 1 && (
        <img
          className="arrow left-arrow"
          src={flecheHor}
          alt="Vue précedénte"
          onClick={imgPrevious}
        />
      )}
      {imgNumber > 1 && (
        <img
          className="arrow right-arrow"
          src={flecheHor}
          alt="Vue suivante"
          onClick={imgNext}
        />
      )}
    </div>
  );
};

export default Carrousel;
