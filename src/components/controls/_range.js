import classNames from "classnames";

const InputRange = ({value, onChange, max, className}) =>  (
    <input
        className={classNames("q-controls__range", className)}
        value={value}
        min={0}
        max={max}
        type="range"
        onChange={onChange}
    />
);

export default InputRange;