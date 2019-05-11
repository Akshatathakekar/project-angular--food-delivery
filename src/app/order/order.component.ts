import { Component } from '@angular/core';
import { Restaurant } from './restaurant';
import { RestaurantService } from './restaurant.service';
import { ActivatedRoute } from '@angular/router';

@Component({
templateUrl:"./order.component.html",
styleUrls:["./order.component.css"]
})
export class OrderComponent{
    // restaurants= 
    // [
    //     {
    //         "id": 101,
    //         "name": "Suruchi Hotel",
    //         "address":"Mumbai",
   
         
    //     }


        
    // ];

    restaurants: Restaurant[];
    constructor(
        private restaurantService: RestaurantService,
        private route: ActivatedRoute) { }




    ngOnInit() {

       // this.restaurants = new Restaurant();
    }

 
    getData() {
        //console.log(this.restaurants);
        this.restaurantService.findAllRestaurants().subscribe((data) => {
            this.restaurants=data;
            console.log(data);
           
        })
    }
   
    
}
