import { Component } from '@angular/core';
import { TranslationService } from './translation/translation.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'singleton-translation';
  
  constructor(public trans: TranslationService) { }

  selectedLang;
  onChange(lang) {
    this.selectedLang = lang;
    this.trans.changeLang(lang);
  }
}
