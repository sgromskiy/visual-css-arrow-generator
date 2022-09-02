import { useState } from "react";
import classNames from "classnames";
import InputRange from './_range';
import SquareControl from './_square';
import './controls.scss';

const DEMO_SIZE = 100;

export function Controls() {
  const [x, setX] = useState(DEMO_SIZE / 2);
  const [y, setY] = useState(DEMO_SIZE / 2);
  const [size, setSize] = useState(10);
  const [directionHoverClassName, setdirectionHoverClassName] = useState(null);
  const [directionClassName, setdirectionClassName] = useState("bottom");
  const [hoverSize, setHoverSize] = useState((DEMO_SIZE * Math.sqrt(2)) / 2);

  const updateX = (e) => {
    setX(e.target.value);
  };

  const updateY = (e) => {
    setY(e.target.value);
  };
  
  const updateSize = (e) => {
    setSize(e.target.value);
  };

  const handleHover = (e) => {
    console.dir(e.target.dataset.name);
    setdirectionHoverClassName(e.target.dataset.name);
  };

  const handleBlur = (e) => {
    setdirectionHoverClassName(null);
  };

  const setOrientation = (e) => {
    setdirectionClassName(e.target.dataset.name);
  };

  return (
    <div className="q-controls">
        <InputRange 
            className="q-controls__range-x" 
            value={x} 
            max={DEMO_SIZE} 
            onChange={updateX}
        />
        <InputRange 
            className="q-controls__range-y" 
            value={y} 
            max={DEMO_SIZE} 
            onChange={updateY}
        />

        <style>
            {
            `:root {
                --q-width: ${DEMO_SIZE}px;
                --q-x: ${x}px;
                --q-y: ${y}px;
            --q-hover-width: ${hoverSize}px;
                }`
            }
        </style>
        <SquareControl 
            handleClick={setOrientation} 
            handleMouseEnter={handleHover} 
            handleBlur={handleBlur} 
            directionHoverClassName={directionHoverClassName} 
            directionClassName={directionClassName}
        />
        <input className="q-controls__size-h" value={size} onChange={updateSize} />
        <input className="q-controls__size-v" value={size} readOnly />
    </div>
  );
}
