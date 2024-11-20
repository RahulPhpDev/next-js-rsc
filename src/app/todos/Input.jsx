import { useImperativeHandle, useRef } from "react";

const Input = ({ref}) => {
    const inputRef = useRef(null);
    useImperativeHandle( ref, () => ({
        clear: () => {
            inputRef.current.value = '';
        }
    }))
    return (
        <div>
            <input name ="todo" type ='text' className="p-3" placeholder='Enter Your todo' ref={inputRef}/>
        </div>
    );
};

export default Input;