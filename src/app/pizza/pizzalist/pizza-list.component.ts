import { Component, OnInit } from '@angular/core';
import {PizzaService} from '../../pizza.service';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {
  constructor(public service: PizzaService) { }

  ngOnInit() {
  }

  remove(key, text) {
    this.service.remove(key, text);
  }

}
