import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service'

@Component({
  selector: 'todoadder',
  templateUrl: './todoadder.component.html',
  styleUrls: ['./todoadder.component.scss'],
})
export class TodoadderComponent implements OnInit {

  item = ''

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  add() {
    this.todoService.add(this.item)
    this.item = ''
  }
}