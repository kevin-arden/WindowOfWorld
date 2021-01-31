import React from "react";
import { useParams } from "react-router-dom";
import { buku } from "../Data/BookData";

const ReadBook = () => {
  const { rid: readId } = useParams();

  const read = buku.filter((buku) => {
    if (readId == buku.id) {
      return buku;
    }
  });

  return <div>this is read book {readId}</div>;
};

export default ReadBook;
