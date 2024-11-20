/**
 * by default this is rsc (react server component)
 */

import AddToDos from "./AddToDos";
import ServerMessages from "./ServerMessages";
import ShowTodos from "./ShowTodos";

const page = () => {
    return (
        <div>
            <ShowTodos />
            <AddToDos >
                <ServerMessages />
            </AddToDos>
        </div>
    );
};

export default page;