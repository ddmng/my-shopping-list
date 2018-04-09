import { Component, OnInit, HostBinding } from '@angular/core';
import { slideInDownAnimation } from '../animations';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css'],
  providers: [  ],
  animations: [slideInDownAnimation]
})
export class PizzaComponent implements OnInit {
  // @HostBinding('@routeAnimation') routeAnimation = false;
  // @HostBinding('style.display')   display = 'block';
  // @HostBinding('style.position')  position = 'absolute';

  constructor() {}

  ngOnInit() {
  }

}
