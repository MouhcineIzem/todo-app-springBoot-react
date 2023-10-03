package controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import entities.TodoItem;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api")
public class TodoItemController {
//    @GetMapping
//    public List<TodoItem> getAllItems() throws IOException {
//        // Load JSON data from the file
//        ObjectMapper objectMapper = new ObjectMapper();
//        ClassPathResource resource = new ClassPathResource("db.json");
//        TodoItem[] items = objectMapper.readValue(resource.getInputStream(), TodoItem[].class);
//
//        return Arrays.asList(items);
//    }

    @GetMapping("/items")
    public ResponseEntity<TodoItem> getData() {
        TodoItem item = new TodoItem();
        item.setId("1");
        item.setTitle("HTML");
        item.setDescription("DEs");
        item.setState("complete");
        return ResponseEntity.ok(item);
    }
}
