
async function fetchTodos () {
//  const data =   await fetch('http://localhost:1337/api/todos');
//  return await data?.json();
return {
    data: [{
        id: 1,
        title: 'first todo'
    },
    {
        id: 2,
        title: 'second todo'
    }]
}
}
const  ShowTodos =async () => {
    const result = await fetchTodos();
    return (
        <div className="mb-10">
            <ol className="list-disc">
            {result?.data?.map(data => {
                return (
                    <li className="text-lg ml-10" key={data?.id}> {data?.title} </li>
                )
            })}
            </ol>
        </div>
    );
};

export default ShowTodos;