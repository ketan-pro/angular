import { Component, OnInit } from '@angular/core';
import { TranslationService } from './../../translation/translation.service';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html'
})
export class CustomerListComponent implements OnInit {

  constructor(trans: TranslationService) { }

  ngOnInit() {
  }

}
