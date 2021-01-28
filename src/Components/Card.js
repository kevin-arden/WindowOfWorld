import React from "react";

const Card = ({ buku }) => {
  const { id, title, penulis, image } = buku;

  return (
    <div
      key={id}
      style={{
        width: "300px",
        height: "400px",
        backgroundColor: "whitesmoke",
        color: "black",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
      <div>
        <img
          style={{
            alignItems: "center",
            width: "250px",
            height: "300px",
          }}
          src={image}
          alt=""
        />
      </div>
      <div>
        <h2 style={{ fontSize: "20px" }}>{title}</h2>
        <h2 style={{ fontSize: "16px" }}>{penulis}</h2>
      </div>
    </div>
  );
};

export default Card;
