'use client';
import React from 'react';
import { postComment } from '../../../actions/postFormData';
const Form = () => {
    const formRef = React.useRef(null);
const [msg, setMsg] = React.useState('');
const [ msgState, optimisticMsg ] = React.useOptimistic(msg, (state, currentMsg) => {
    return currentMsg;
})

const submitHandler = async (prevState,  formData) => {
    formRef.current.reset();
    optimisticMsg(formData.get('comment'));
    await new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve('done');
        }, 2000);
    })
   const result = await postComment(formData)

}

const [state, formAction, isPending] = React.useActionState(submitHandler, {});

    return (
        <>
        {msgState && <div className='flex bg-gray-200 mb-10 p-2 rounded justify-between'><p className=" text-sm  " > {msgState}  </p><i className='text-xs'> sending ... </i></div>}
        <form ref = {formRef} action={formAction}>
             <textarea name ="comment" className="w-full h-24 px-3 py-2 text-sm placeholder-gray-500 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400"></textarea>


            <button  className="text-sm font-semibold text-blue-500">
                   {isPending ? 'Pending .....' : ' Post Comment' }   
          </button>
        </form>
        </>
    );
};

export default Form;