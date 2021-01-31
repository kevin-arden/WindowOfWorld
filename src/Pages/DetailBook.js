import React, { useContext } from "react";
import Sidebar from "../Components/Sidebar";
import { useParams, useHistory } from "react-router-dom";
import { buku } from "../Data/BookData";
import ReadBook from "./ReadBook";
import { AppContext } from "../Context/globalContext";

import "../DetailBook.css";

const DetailBook = () => {
  const [state, dispatch] = useContext(AppContext);

  const history = useHistory();
  const { id: bookId } = useParams();
  const book = buku.filter((buku) => {
    if (bookId == buku.id) {
      return buku;
    }
  });


  console.log(book[0].id);

  return (
    <div>
      <div className="App-header">
        <div className="row">
          <div className="col-md-2">
            <Sidebar />
          </div>
          <div className="col-md-10">
            <div className="row body-upper">
              <div className="col-md-4">
                <img className="detail-image" src={book[0].image} alt="" />
              </div>
              <div className="col-md-8">
                <p className="title">{book[0].title}</p>
                <p className="writer">{book[0].writer}</p>
                <p className="upper">Publication Date</p>
                <p className="lower">{book[0].publicationDate}</p>
                <p className="upper">Pages</p>
                <p className="lower">{book[0].pages}</p>
                <p className="upper">ISBN</p>
                <p className="lower">{book[0].isbn}</p>
              </div>
            </div>
            <div className="bawah">
              <p className="title-about">About This Book</p>
              <p className="text-about">{book[0].about}</p>
            </div>
            <div>
              <button className="btn btn-danger">Add My List</button>
              <button
                className="btn btn-secondary"
                onClick={() => history.push("/read/" + bookId)}
              >
                Read Book
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailBook;
