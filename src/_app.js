import { useState } from "react";
import classNames from "classnames";
import "./app.scss";
import { Visualizator } from "./components/visualizator/_visualizator";
import { Controls } from "./components/controls/_controls";

const DEMO_SIZE = 100;

export function App() {

  return (
    <div classNames="section">
      <div classNames="container">
        <div class="main">
          <Controls />
          <Visualizator />
        </div>
      </div>
    </div>
  );
}
