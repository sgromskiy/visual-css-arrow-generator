import { useState } from "react";
import classNames from "classnames";
import "./app.scss";
import { Visualizator } from "./components/visualizator/_visualizator";
import { Controls } from "./components/controls/_controls";

const DEMO_SIZE = 100;

export function App() {

  return (
    <div className="section">
      <div className="container">
        <div className="main">
          <Controls />
          <Visualizator />
        </div>
      </div>
    </div>
  );
}
