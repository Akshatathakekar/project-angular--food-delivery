import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dish } from './dish';

@Injectable()
export class DishService {
    // baseUrl = "api/dishes/dish.json";
    baseUrl="http://localhost:8080"

    constructor(private http: HttpClient) { }
    
    findDishById(dishId: number): Observable<Dish> {
        return this.http.get<Dish>(this.baseUrl + "dish/" + dishId);
    }


    findAllDishes():Observable<Dish[]>{
        return this.http.get<Dish[]>(this.baseUrl);

    }
} 