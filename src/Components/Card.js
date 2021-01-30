import React from "react";
import "../card.css";

const Card = ({ buku }) => {
  const { id, title, penulis, image } = buku;

  return (
    <div className="outer-box" key={id}>
      <div>
        <img className="book-title" src={image} alt="" />
      </div>
      <div>
        <p className="title">{title}</p>
        <p className="writer">{penulis}</p>
      </div>
    </div>
  );
};

export default Card;
