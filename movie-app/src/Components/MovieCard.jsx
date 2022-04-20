import React from "react";
import "./styles.css";

const MovieCard = (props) => {
  const { name, image, language, rating } = props;

  return (
    <div className='flip-card'>
      <div className='flip-card-inner'>
        <div className='flip-card-front'>
          <img
            src={image.medium}
            alt='movie-image'
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className='flip-card-back'>
          <h1>{name}</h1>
          <p>{language}</p>
          <p>{rating.average}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
