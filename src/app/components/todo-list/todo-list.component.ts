import { Component, OnInit } from '@angular/core';
import { TodoService } from "../../services/todo.service";
import { Todo } from "../../models/Todo"

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos:Todo[];
  constructor( private todoService:TodoService ) { }

  ngOnInit() {
    this.todos = this.todoService.getTodos();
    /*
    future 

    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    })
    */
  }
  deleteTodo(todo: Todo){
    console.log('Delete me');
    this.todos = this.todos.filter(t => t.id !== todo.id); // could go into the subscribe
    this.todoService.deleteTodo(todo).subscribe();
  }

  addTodo(todo: Todo){
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo);
    });
  }

}
