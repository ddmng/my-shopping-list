import {Component, OnInit} from '@angular/core';
import {PizzaItem} from '../../models/pizza-item';
import {FormControl} from '@angular/forms';
import {PizzaService} from '../pizza.service';

@Component({
  selector: 'app-pizza-adder',
  templateUrl: './pizza-adder.component.html',
  styleUrls: ['./pizza-adder.component.css']
})
export class PizzaAdderComponent implements OnInit {
  text: string;

  form = new FormControl();
  filteredOptions = [];

  constructor(private service: PizzaService) {
  }

  ngOnInit() {
    this.form.valueChanges.subscribe({
      next: v => {
        const q = this.service.db.list<PizzaItem>(this.service.autocColl,
          ref => ref.orderByChild('text')
        ).valueChanges();
        const subs = q.subscribe({
          next: res => {
            this.filteredOptions = [];
            const p = res.map(el => el.text)
              .filter(el => el.toLowerCase().startsWith(v.toLowerCase()));
            p.slice(0, 5).forEach(el => this.filteredOptions.push(el));
          }
        });
        setTimeout(() => {
          subs.unsubscribe();
        }, 1000);
      }
    });
  }


  add() {
    this.service.add(this.form.value);
    this.form.reset();
  }
}
