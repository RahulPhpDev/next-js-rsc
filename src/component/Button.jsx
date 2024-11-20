'use client'
const Button = ({classNames, style, clickHandler, children, disabled}) => {
    return (
        <div>
              <button disabled={disabled} className={`text-white ${disabled ? 'bg-[gray] text-blue-100': 'bg-blue-700 '}  rounded-lg  p-2.5 ${classNames}`}
        onClick = {() => clickHandler()} style = {style}> {children} </button>
        </div>
    );
};

export default Button;