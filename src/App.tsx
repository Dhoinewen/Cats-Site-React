import React from "react";
import "./App.css";
import { Header } from "components/Header";

function App() {
  return (
    <div className="w-full justify-items-center text-center">
      <Header />
      <h1 className={"underline text-4xl"}>Init</h1>
    </div>
  );
}

export default App;
