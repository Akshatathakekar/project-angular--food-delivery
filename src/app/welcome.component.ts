import { Component, OnInit } from '@angular/core';
import { Address, Users } from './user';
import { WelcomeService } from './welcome.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: "./welcome.component.html"
})
export class WelcomeComponent implements OnInit {

    user: Users;

    constructor(private welcomeService: WelcomeService,
        private router: Router) { }

    ngOnInit() {
        this.user = new Users();
        this.user.address = new Address();

    }

    register(): void {

        this.welcomeService.registerNewUser(this.user).subscribe((data) => {

            console.log("success");

            if (data != null) {
               


                alert("registration is successfulPlease, login");


                this.router.navigate(["/home"]);
                var element = document.getElementById("my");
                 element.classList.remove("show");
                document.querySelector('.modal-backdrop').classList.remove("fade","modal-backdrop");

            }

        })


    }


    login(): void {

        let email = (<HTMLInputElement>document.getElementById("email")).value;
        let password = (<HTMLInputElement>document.getElementById("pwd")).value;

        this.welcomeService.loginUser(email, password).subscribe((data) => {
            if (data != null) {
                console.log("success");

                alert("Login successful");
                this.router.navigate(["/profile"]);

                var element = document.getElementById("myModal");
                element.classList.remove("show");
               document.querySelector('.modal-backdrop').classList.remove("fade","modal-backdrop");
            }
        })
    }



}