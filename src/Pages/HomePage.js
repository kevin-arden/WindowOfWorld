import React, { useContext } from "react";
import Sidebar from "../Components/Sidebar";
import Frame from "../Image/Frame1.png";
import Card from "../Components/Card";
import "../HomePage.css";
import { AppContext } from "../Context/globalContext";
import { buku } from "../Data/BookData";

const HomePage = () => {
  const [state, dispatch] = useContext(AppContext);

  

  console.log(state.isSubscribed, state.isLogin);

  return (
    <div className="App-header">
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10">
          <img className="center cover" src={Frame} alt="" />

          <p className="book-header">List Book</p>
          <div>
            <div className="book1">
              {buku.map((buku, index) => (
                  <Card buku={buku} key={buku.id}/>
                ))}
            </div>
          </div>
        </div>
      </div>
      {/* <pre>{JSON.stringify(state.userLogin.subscribed, null, 2)}</pre> */}
    </div>
  );
};

export default HomePage;
