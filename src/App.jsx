import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/header";
import Sidebar from "./components/Sidebar";
import Creates from "./components/Creates";
function App() {
  return (
    <div className="App-container">
      <Sidebar />
      <div className="main-content">
      <Header />
      <Creates />
      <Footer />
      </div>
    </div>
  );
}

export default App;
