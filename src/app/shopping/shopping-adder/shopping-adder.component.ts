import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../../todo.service'
import {ShoppingItem} from '../../models/shopping-item';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-shopping-adder',
  templateUrl: './shopping-adder.component.html',
  styleUrls: ['./shopping-adder.component.scss'],
})
export class ShoppingAdderComponent implements OnInit {
  text: string;

  form = new FormControl();
  filteredOptions = [];

  constructor(private service: ShoppingService) { }

  ngOnInit() {
    this.form.valueChanges.subscribe({
      next: v => {
        const q = this.service.db.list<ShoppingItem>(this.service.autocColl,
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
