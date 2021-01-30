import React, {useState} from 'react'
import Sidebar from "../Components/Sidebar";
import Wow from '../Image/Wow.png'

const SubscribePage = () => {
    const [loginFormData, setLoginFormData] = useState({
      accNumber: "",
      proofOfTransfer: "",
    });

    const { accNumber, proofOfTransfer } = loginFormData;

    const onChange = (e) => {
      setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
    e.preventDefault();
    alert(`Success`);
    }
    return (
      <div className="App-header">
        <div className="row">
          <div className="col-md-2">
            <Sidebar />
          </div>
          <div className="col-md-2"></div>

          <div style={{ alignItems: "center" }} className="col-md-6 App-header">
            <h1>Premium</h1>
            <br />
            <p>
              Pay now and access all the latest books from{" "}
              <img src={Wow} alt="" />{" "}
            </p>
            <p>
              <img src={Wow} alt="" />: 0981312323
            </p>
            <form onSubmit={(e) => onSubmit(e)}>
              <div className="form-group">
                <input
                  name="accNumber"
                  value={accNumber}
                  onChange={(e) => onChange(e)}
                  type="text"
                  className="form-control"
                  placeholder="Input your account number"
                />
              </div>
              <div className="form-group">
                <input
                  name="proofOfTransfer"
                  value={proofOfTransfer}
                  onChange={(e) => onChange(e)}
                  type="text"
                  className="form-control"
                  placeholder="Attach proof of transfer"
                />
              </div>
              <div className="form-group">
                <button className="btn btn-danger btn-block">Send</button>
              </div>
            </form>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    );
}

export default SubscribePage
