import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service'

@Component({
  selector: 'todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent implements OnInit {

  constructor(public todoService: TodoService) {
  }

  ngOnInit() {
  }

  remove(item) {
    // console.log("requested remove of " + item)
    this.todoService.remove(item)
  }

}
