import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  @Input() data: {type: string, amount: number};

  constructor() { }

  ngOnInit(): void {
  }


}
