import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginComponent from "./Components/LoginComp";
import SignUp from "./Components/SignUpComp";
import vector from "./Image/Vector1.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-4">
            <h1 className="Logo">WOW</h1>
            <h2>Window of World</h2>
            <p>
              Sign-up now and subscribe to enjoy all the cool and latest books -
              The best book rental service provider in Indonesia
            </p>

            <LoginComponent />
            <SignUp />
          </div>
          <div className="col-md-1">
            <img src={vector} alt="not found" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
