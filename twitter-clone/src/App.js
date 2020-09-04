import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar.js";
import Feed from "./components/Feed/Feed.js";
import Widgets from "./components/Widgets/Widgets.js";

function App() {
  return (
    <div className="app">
      <Sidebar className="app__sidebar" />
      <Feed />
      <Widgets />
    </div>
  );
}

export default App;
