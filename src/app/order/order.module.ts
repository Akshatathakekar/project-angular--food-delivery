import { OrderComponent } from './order.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { orderRoutes } from './order.route';
import { DishService } from './dish.service';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart.component';
import { CheckoutComponent } from './checkout.component';
import { DishComponent } from './dish.component';
import { PaymentComponent } from './payment.component';
import { RestaurantService } from './restaurant.service';

@NgModule({
    declarations: [
      OrderComponent,
      CartComponent,
      CheckoutComponent,
      DishComponent,
      PaymentComponent
      
    ],
    imports: [
      BrowserModule,
      RouterModule.forChild(orderRoutes),
      HttpClientModule
    ],
    providers: [DishService,RestaurantService],
    exports:[RouterModule]
})
export class OrderModule{

}
