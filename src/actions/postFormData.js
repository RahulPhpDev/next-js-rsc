'use server'

import { revalidatePath } from "next/cache";

const postFormData = async (formData) => {
  
    console.log({formData})
    const formData2 = {data: {title: formData.get('todo')}}
   const result = await fetch('http://localhost:1337/api/todos', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
             Authorization: 'bearer 55811c8503d778626b652737c63684afa5940132bccabfdd76c1f17cb503e5f6e75f5268e3acf4e68d77eeb958db181571f3275120f4b2b3a37c782f00c6365bbc343d26ec5c4af113e110da65a9ea958f5c4b7eee876b54a3c92779e51f14fb7a4f609f77f1b4c28b13bec35bb5369bd1eb261ef2d2eeb47fa9199c9b392105'
        },
        body:JSON.stringify(formData2)
    });
    await result.json();
    revalidatePath('/todos')
}

export default postFormData;