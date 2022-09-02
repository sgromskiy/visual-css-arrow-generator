import { useState } from "react";
import classNames from "classnames";
import "./app.scss";
const DEMO_SIZE = 100;

export function App() {
  const [x, setX] = useState(DEMO_SIZE / 2);
  const [y, setY] = useState(DEMO_SIZE / 2);
  const [directionHoverClassName, setdirectionHoverClassName] = useState(null);
  const [directionClassName, setdirectionClassName] = useState("bottom");
  const [hoverSize, setHoverSize] = useState((DEMO_SIZE * Math.sqrt(2)) / 2);

  const updateX = (e) => {
    setX(e.target.value);
  };

  const updateY = (e) => {
    setY(e.target.value);
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
    <div>
      <input
        name="x"
        value={x}
        min={0}
        max={DEMO_SIZE}
        type="range"
        onChange={updateX}
      />
      <input
        name="y"
        data-orientation="vertical"
        value={y}
        min={0}
        max={DEMO_SIZE}
        type="range"
        onChange={updateY}
      />
      <div
        style={{
          "--q-width": `${DEMO_SIZE}px`,
          "--q-x": `${x}px`,
          "--q-y": `${y}px`,
          "--q-hover-width": `${hoverSize}px`
        }}
        className={classNames("square-control", {
          [`square-control--hover-${directionHoverClassName}`]: directionHoverClassName,
          [`square-control--active-${directionClassName}`]: directionClassName
        })}
      >
        <div onMouseLeave={handleBlur} className="square-control__field">
          <div className="square-control__hover square-control__right">
            <span
              data-name="right"
              onClick={setOrientation}
              onMouseEnter={handleHover}
            />
          </div>
          <div className="square-control__hover square-control__left">
            <span
              data-name="left"
              onClick={setOrientation}
              onMouseEnter={handleHover}
            />
          </div>
          <div className="square-control__hover square-control__bottom">
            <span
              data-name="bottom"
              onClick={setOrientation}
              onMouseEnter={handleHover}
            />
          </div>
          <div className="square-control__hover square-control__top">
            <span
              data-name="top"
              onClick={setOrientation}
              onMouseEnter={handleHover}
            />
          </div>
        </div>
      </div>
      <p>
        {x} {y}
      </p>
    </div>
  );
}
