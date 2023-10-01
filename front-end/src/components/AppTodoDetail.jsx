import React from 'react';
import { useParams } from "react-router-dom";

const AppTodoDetail = ({ todos }) => {
    const { id } = useParams();
    const todo = todos.find((t) => t.id === Number(id));

    if (!todo) {
        return <div>Todo not found</div>
    }

    return (
        <div>
            <h2>Todo Detail</h2>
            <h3>{todo.title}</h3>
            <p>{todo.description || 'No description available'}</p>
        </div>
    );
};

export default AppTodoDetail;
