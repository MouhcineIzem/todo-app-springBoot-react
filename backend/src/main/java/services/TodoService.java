package services;

import entities.Todo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import repositories.TodoRepository;

import java.util.List;

@Service
public class TodoService {
    @Autowired
    private TodoRepository todoRepository;

    public List<Todo> getAllTodos() {
        return todoRepository.findAll();
    }

    public Todo addTodo(Todo todo) {
        return todoRepository.save(todo);
    }

    public Todo toggleTodoState(Long id) {
        Todo todo = todoRepository.getById(id);
        todo.setDone(!todo.isDone());
        return todoRepository.save(todo);
    }
}
