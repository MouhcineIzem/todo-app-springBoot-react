import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ListTodo = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/items')
            .then(response => setTodos(response.data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <h2>Todo List</h2>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        {todo.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListTodo;
