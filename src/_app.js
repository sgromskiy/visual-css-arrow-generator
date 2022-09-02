import { useState } from "react";
import classNames from "classnames";
import "./app.scss";

import { Controls } from "./components/_controls";
const DEMO_SIZE = 100;

export function App() {
 
  return (
    <div>
      <Controls />
    </div>
  );
}
