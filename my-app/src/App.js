import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import CounterGroup from "./components/CounterGroup";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CounterGroup size={1}/>
      </header>
    </div>
  );
}

export default App;
