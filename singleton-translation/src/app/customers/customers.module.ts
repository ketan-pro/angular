import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { TranslationModule } from '../translation/translation.module';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule,
    TranslateModule.forChild({})
  ],
  declarations: [CustomerListComponent]
})
export class CustomersModule { }
