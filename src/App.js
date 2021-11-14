import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Register from "./Component/Register";
import Login from "./Component/Login"
import ForgotPassword from "./Component/ForgotPassword"
import Form from "./Component/Form"
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route exact path="/" element={<Register/>} />
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/forgot-password" element={<ForgotPassword/>}/>
        <Route exact path="/form" element={<Form/>}/>
      </Routes>     
      </Router>
    </div>
  );
}

export default App;
