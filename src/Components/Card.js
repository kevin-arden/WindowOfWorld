import React, { useContext } from "react";
import "../card.css";
import { useHistory } from "react-router-dom";
import { AppContext } from "../Context/globalContext";
import DetailBook from "../Pages/DetailBook";

const Card = ({ buku }) => {
  const [state] = useContext(AppContext);

  const { id, image, title, writer } = buku;

  const history = useHistory();
  return (
    <div
      className="outer-box"
      key={id}
      onClick={() =>
        state.userLogin.subscribed
          ? history.push("/book/"+buku.id)
          : alert(`please make payment to read latest book`)
      }
    >
      <div>
        <img className="book-title" src={image} alt="" />
      </div>
      <div>
        <p className="title-card">{title}</p>
        <p className="writer">{writer}</p>
      </div>
    </div>
  );
};

export default Card;
