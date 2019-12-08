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

  todosUrl: string = "https://jsonplaceholder.typecode.com/todos";
  todosLimit = '?_limit=5';

  constructor(private http: HttpClient) { }

  futureGetTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);

  }

  toggleCompleted(todo: Todo): Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions)
  }

  deleteTodo(todo: Todo):Observable<Todo>{
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.delete<Todo>(url,httpOptions);
  }

  addTodo(todo: Todo):Observable<Todo>{
    return this.http.post<Todo>(this.todosUrl, todo, httpOptions);
  }

  getTodos() {
    return [
      {
        id: 1,
        title: "Test 1",
        completed: false
      },
      {
        id: 2,
        title: "Test 2",
        desc: "This is a test description",
        completed: false
      },
      {
        id: 3,
        title: "Test 3",
        completed: false
      }
    ];
  }
}
