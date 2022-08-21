import React from "react";
import Feed from "./components/feeder/Feed";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div>
      <div className="container-fluid">
        <Header />
      </div>
      <div className="container app_body my-1">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
}

export default App;
