import classNames from "classnames";

const SquareControl = ({
    handleClick, 
    handleMouseEnter, 
    handleBlur, 
    directionHoverClassName, 
    directionClassName 
}) => (
<div
    className={classNames("q-square-control", {
        [`q-square-control--hover-${directionHoverClassName}`]: directionHoverClassName,
        [`q-square-control--active-${directionClassName}`]: directionClassName
    })}
>
    <div onMouseLeave={handleBlur} className="q-square-control__field">
        <div className="q-square-control__hover q-square-control__right">
            <span
                data-name="right"
                onClick={handleClick}
                onMouseEnter={handleMouseEnter}
            />
        </div>
        <div className="q-square-control__hover q-square-control__left">
            <span
                data-name="left"
                onClick={handleClick}
                onMouseEnter={handleMouseEnter}
            />
        </div>
        <div className="q-square-control__hover q-square-control__bottom">
        <span
            data-name="bottom"
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
        />
        </div>
        <div className="q-square-control__hover q-square-control__top">
        <span
            data-name="top"
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
        />
        </div>
    </div>
</div>
);

export default SquareControl;