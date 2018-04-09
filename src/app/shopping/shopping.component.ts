import { Component, OnInit, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { slideInDownAnimation } from '../animations';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slideInDownAnimation]
})
export class ShoppingComponent implements OnInit {
  // @HostBinding('@routeAnimation') routeAnimation = false;
  // @HostBinding('style.display')   display = 'block';
  // @HostBinding('style.position')  position = 'absolute';

  constructor() { }

  ngOnInit() {
  }

}
