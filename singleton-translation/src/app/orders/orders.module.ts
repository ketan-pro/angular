import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationModule } from './../translation/translation.module';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrderListComponent } from './order-list/order-list.component';

@NgModule({
  imports: [
    CommonModule,
    OrdersRoutingModule,
    TranslationModule
  ],
  declarations: [OrderListComponent]
})
export class OrdersModule { }