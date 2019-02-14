import { NgModule, ModuleWithProviders,Optional, SkipSelf } from '@angular/core';
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient } from '@angular/common/http';
import { TranslationService } from './translation.service';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json?v=1');
}

const translationOptions = {
  loader: {
    provide: TranslateLoader,
    useFactory: (createTranslateLoader),
    deps: [HttpClient]
  }
};

@NgModule({
  imports: [TranslateModule.forRoot(translationOptions)],
  exports: [TranslateModule],
  providers: [TranslationService]
})
export class TranslationModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TranslationModule,
      providers: [TranslationService]
    };
  }

  constructor() {
    console.log('Translation module created');
  }
}