import React from 'react';

const Input = ({type, className, changeHandler}) => {
    return (
        <div>
            <input type = {type} className='' onChange={changeHandler} />
        </div>
    );
};

export default Input;