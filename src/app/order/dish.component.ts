import { Component, OnInit } from '@angular/core';
import { Dish } from './dish';
import { DishService } from './dish.service';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from './restaurant.service';
import { Restaurant } from './restaurant';

@Component({
    templateUrl: "./dish.component.html"
})
export class DishComponent implements OnInit {

    dishes: Dish[];
    restaurants: Restaurant;
    constructor(private dishService: DishService,
        private restaurantService: RestaurantService,
        private route: ActivatedRoute) { }




    ngOnInit() {

        this.restaurants = new Restaurant();
    }

 
    getData() {
        console.log(this.restaurants);
        this.restaurantService.findAllRestaurants().subscribe((data) => {
            console.log("success");
            if (data != null) {
                alert("Registration is successful!");
            }
        })
    }

}

