import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../user';
import { Observable } from 'rxjs';

@Injectable()
export class CustomerService{
    baseUrl="http://localhost:8080"

    constructor(private http:HttpClient) { }
    
    findAddressByEmail(email:String): Observable<Users> {
        return this.http.get<Users>(this.baseUrl + "/users/" + email);
    }

    

}