import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

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
