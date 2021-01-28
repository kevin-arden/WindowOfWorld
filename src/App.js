import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import LoginComponent from './Components/LoginComp'
import SignUp from './Components/SignUpComp'

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome</h1>
        
        <LoginComponent />
        <SignUp />
      </header>
    </div>
  );
}

export default App;
