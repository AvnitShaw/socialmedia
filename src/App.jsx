import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/header";
import Sidebar from "./components/Sidebar";
import Creates from "./components/Creates";
import PostList from "./components/PostList";
import { useState } from "react";
import PostListProvider from "./store/Postlistprovider";
function App() {
  const [selectedTab, setselectedTab] = useState("Home");
  return (
    <PostListProvider>
    <div className="App-container">
      <Sidebar selectedTab={selectedTab}  setselectedTab={setselectedTab}/>
      <div className="main-content">
        <Header />
        {selectedTab === "Home" ? <PostList /> : <Creates />}
        <Footer />
      </div>
    </div>
    </PostListProvider>
  );
}

export default App;
