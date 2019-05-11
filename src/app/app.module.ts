import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.route';
import { WelcomeComponent } from './welcome.component';
import { OrderModule } from './order/order.module';
import { CustomerModule } from './customer/customer.module';
import { DeliveryboyModule } from './deliveryboy/deliveryboy.module';
import { HttpClient } from 'selenium-webdriver/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeService } from './welcome.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
  ],

  imports: [
    BrowserModule,
    OrderModule,
    FormsModule,
    HttpClientModule,
    CustomerModule,
    DeliveryboyModule,
    RouterModule.forRoot(appRoutes)

  ],

  providers: [WelcomeService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
