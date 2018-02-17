import {Component, OnInit} from '@angular/core';
import {TodoService} from '../../todo.service';
import {PizzaItem} from '../../models/pizza-item';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {filter, map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-pizza-adder',
  templateUrl: './pizza-adder.component.html',
  styleUrls: ['./pizza-adder.component.css']
})
export class PizzaAdderComponent implements OnInit {
  text: string;

  form = new FormControl();
  filteredOptions = [];

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.form.valueChanges.subscribe({
      next: v => {
        const q = this.todoService.db.list<PizzaItem>(this.todoService.pizzaAutocompleteCollection,
          ref => ref.orderByChild('text')
        ).valueChanges();
        const subs = q.subscribe({
          next: res => {
            this.filteredOptions = [];
            const p = res.map(el => el.text).filter(el => el.toLowerCase().startsWith(v.toLowerCase()));
            p.forEach(el =>
              this.filteredOptions.push(el)
            );
          }
        });
        setTimeout(() => {
          subs.unsubscribe();
        }, 1000);
      }
    });
  }


  add() {
    this.todoService.addPizza(this.form.value);
    this.form.reset();
  }
}
