import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { TranslationModule } from '../translation/translation.module';
@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule,
    TranslationModule
  ],
  declarations: [CustomerListComponent]
})
export class CustomersModule { }
