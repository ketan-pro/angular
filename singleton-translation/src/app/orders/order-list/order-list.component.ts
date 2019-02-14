import { Component, OnInit } from '@angular/core';
import { TranslationService } from './../../translation/translation.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html'
})
export class OrderListComponent implements OnInit {

  constructor(trans: TranslationService) { }

  ngOnInit() {
  }

}