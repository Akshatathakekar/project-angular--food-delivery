import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Users } from '../user';
import { CustomerService } from './customer.service';
import { ActivatedRoute } from '@angular/router';
import { Address } from '../deliveryboy/deliveryboy';

@Component({
    // selector: 'sky-vertical-tabs-demo',
    templateUrl: "./profile-details.component.html",
     styleUrls: ['./profile-details.component.css']

})
export class ProfileDetailsComponent implements OnInit
{
    // ratings=6;
    // starWidth= this.ratings * 75/5;
    // starColor="red";

    constructor(private dataService: CustomerService,private route:ActivatedRoute) { }
    user: Users;
    address:Address;

    
  @Input() rating: number;
  @Input() itemId: number;
  @Output() ratingClick: EventEmitter<any> = new EventEmitter<any>();

  inputName: string;

  ngOnInit() {
        this.inputName = this.itemId + '_rating';

        this.user=new Users();
        this.address=new Address();

        this.route.paramMap.subscribe((map)=>{
        let  email=map.get("email");

        this.dataService.findAddressByEmail(email).subscribe((data)=>{
        this.user=data;

        });

    });
  }




  onClick(rating: number): void {
    this.rating = rating;
    this.ratingClick.emit({
      itemId: this.itemId,
      rating: rating
    });





    
   
 }


   









    orders=[
        
        {
            "orderId":123456,
            "price":450,
            // "ratings":3.2,
            "quantity":2,
            "dishName":"Pizza",
            "status":"Delivered",
            "imgUrl":"assets/images/pizza.jpg",
            "date":"25 April 2019"
        },
        {
            "orderId":123457,
            "price":200,
            "ratings":4.2,
            "quantity":3,
            "dishName":"Ice Cream",
            "status":"Delivered",
            "imgUrl":"assets/images/icecream.jpg",
            "date":"30 April 2019"
            
        },
        {
            "orderId":123458,
            "price":100,
            // "ratings":4.0,
            "quantity":4,
            "dishName":"Burger",
            "status":"Delivered",
            "imgUrl":"assets/images/burger.jpg",
            "date":"1 May 2019"
            
        }
        
    ];
    



    // users=
    //     {
    //     "id":101,
    //     "name":"Jeny Doe",
    //     "address":"shivaji chowk,LMN Road",
    //     "city":"Mumbai",
    //     "imageUrl":"assets/images/profile.jpg",
    //     "firstAddress":" ",
    //     "secondAddress":"",
    //     "comments":"Delicious food and good service"
    // }
   
}