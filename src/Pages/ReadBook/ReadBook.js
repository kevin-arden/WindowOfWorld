import React from "react";
import logoPic from "../../Image/IconMini.png";
import { ReactReader } from "react-reader";
import { useParams, useHistory } from "react-router-dom";

const ReadBook = () => {
  const rid = useParams();

  const history = useHistory();

  const goToHome = () => {
    history.push(`/home`);
  };

  return (
    <div style={{ backgroundColor: "whitesmoke" }}>
      <div className="row">
        <div className="col-md-2">
          <img
            className="logos"
            src={logoPic}
            alt=""
            onClick={() => goToHome()}
          />
        </div>
        <div className="col-md-10"></div>
      </div>
      <div className="row">
        <ReactReader
          url={"../Ebook/creative.epub"}
          title={"Creative Selection"}
          location={"epubcfi(/6/2[cover]!/6)"}
          locationChanged={(epubcifi) => console.log(epubcifi)}
        />
      </div>
    </div>
  );
};

export default ReadBook;
