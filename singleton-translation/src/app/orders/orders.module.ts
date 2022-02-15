import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationModule } from './../translation/translation.module';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrderListComponent } from './order-list/order-list.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    OrdersRoutingModule,
    TranslateModule.forChild({})
  ],
  declarations: [OrderListComponent]
})
export class OrdersModule { }