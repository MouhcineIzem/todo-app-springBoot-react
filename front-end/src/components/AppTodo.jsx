import { useState} from "react";


const AppTodo = () => {
    const [todos, setTodos ] = useState([
        { id: 1, title: 'JavaScript', state: 'todo'},
        { id: 2, title: 'HTML', state: 'todo'},
        { id: 3, title: 'CSS', state: 'todo'}
    ]);

    const handleCheckboxChange = (id) => {
        setTodos((prevTodos) => {
            const updateTodos = [...prevTodos];
            const todoIndex = updateTodos.findIndex((todo) => todo.id === id);

            if (todoIndex !== -1) {
                const updatedTodo = { ...updateTodos[todoIndex] };
                updatedTodo.state = updatedTodo.state === 'todo' ? 'done' : 'todo';
                updateTodos.splice(todoIndex, 1);
                updateTodos.push(updatedTodo);
            }
            return updateTodos;
        })
    }

    return (
        <div>
            <h2>Todo List</h2>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <input
                            type="checkbox"
                            checked={todo.state === 'done'}
                            onChange={() => handleCheckboxChange(todo.id)}
                        />
                        <span
                            style={{
                                textDecoration: todo.state === 'done' ? 'line-through' : 'none'
                            }}
                        >
                            {todo.title}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AppTodo;
