import React from "react";

const MovieCard = (props) => {
  const { name, image, language } = props;
  return (
    <section>
      <h2>{name}</h2>
      <figure
        style={{
          border: "1px black solid",
          height: "450px",
          width: "90vw",
          backgroundColor: "white",
        }}
      >
        <img src={image.medium} />
        <figcaption>{language}</figcaption>
      </figure>
    </section>
  );
};

export default MovieCard;
