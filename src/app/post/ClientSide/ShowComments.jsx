
import React from 'react';
const fetchComment = async () => {
    const result = await  fetch('http://localhost:1337/api/comments');
    console.log(result);
    return await result.json();
}
const ShowComments =  async () => {
   const comments =  await fetchComment() ;
   console.log('comments', comments?.data);
    await comments?.data?.reverse();
    return (
        <>
        <React.Suspense fallback= {<p> Loading Comments.....</p>} >
        
        {comments?.data?.map( (comment, index) => (
            <div className="p-4 rounded text-sm mb-2 bg-gray-200 flex justify-between"  key ={comment?.id}>
                <p > {comment?.comment}</p>
                <i className='text-xs align-right'> {new Date(comment?.createdAt).toLocaleString() }</i>
            </div>
        ))
    }
        </React.Suspense>
        </>
    );
};

export default ShowComments;