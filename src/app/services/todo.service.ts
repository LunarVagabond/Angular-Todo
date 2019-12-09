import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/Todo';
import { Observable, observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': "application/json"
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todosUrl: string = "http://localhost:3000";
  todosLimit = '?_limit=5';

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosUrl}/all`);//${this.todosLimit}`);

  }

  toggleCompleted(todo: Todo): Observable<any> {
    const url = `${this.todosUrl}/updateStatus/${todo.todo_id}`;
    return this.http.put(url, todo, httpOptions)
  }

  deleteTodo(todo: Todo):Observable<Todo>{
    const url = `${this.todosUrl}/removeTodo/${todo.todo_id}`;
    return this.http.delete<Todo>(url,httpOptions);
  }

  addTodo(todo: Todo):Observable<Todo>{
    return this.http.post<Todo>(`${this.todosUrl}/addTodo`, todo, httpOptions);
  }
}
