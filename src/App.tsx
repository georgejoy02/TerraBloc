import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Login } from "./pages/Login";
import RegisterAdmin from "./pages/RegisterAdmin";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <Sidebar />
      <RegisterAdmin />
    </div>
  );
}

export default App;
