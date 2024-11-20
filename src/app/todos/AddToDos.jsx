'use client'
import { useActionState, useRef } from "react";
import { postFormData } from '../../actions/postFormData';
import Button from '../../component/Button';
import Input from './Input';
const AddToDos = ({children}) => {
    const inputRef = useRef(null);
    // useEffect(() => {

    //     inputRef.current.focus();
    //     inputRef.current.value ='type here'
    // }, [])
    function handleClick() {
        inputRef.current.focus();
        // This won't work because the DOM node isn't exposed:
        // ref.current.style.opacity = 0.5;
      }
    
    const formSubmit = async (prevState, formData) => {
        await new Promise( (resolve, reject) => {
            setTimeout( () => {
                resolve('done')
            }, 1000)
        });
        const result = await postFormData(formData)
    }
    const handleClear = () => {
        inputRef.current.clear();  // Calls the clear method defined in MyInput

    };
    const [state, formAction, isPending] = useActionState(formSubmit, {})
    return (
        <div >
          {children}
            <form action = {formAction} className="flex gap-10">
              <Input ref={inputRef} />
                <Button clickHandler={() => null} disabled ={isPending}> Save </Button>
                <button type="button" onClick={handleClick}>  Edit   </button>
                <button  type="button"  onClick={handleClear}>Clear Input</button>
             </form>
        </div>
    );
};

export default AddToDos;