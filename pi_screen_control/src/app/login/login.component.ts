import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import myGlobals = require('../globals');

@Component({
	selector: 'login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent {
	private _email : string;
	private _password : string;
	private _displayErrorLogin : boolean = false;

	constructor(private router: Router) {
	}

	ngOnInit() {
		myGlobals.connect = false;
		myGlobals.email = "";
	}

	signIn() {
		this._displayErrorLogin = false;
		this._email = (<HTMLInputElement>document.getElementById("inputEmail")).value;
		this._password = (<HTMLInputElement>document.getElementById("inputPassword")).value;
		if (this._email == "root@root.fr" && this._password == "root") {
			myGlobals.connect = true;
			myGlobals.email = this._email;
	        this.router.navigate(['/home']);
		}
	    else
	    	this._displayErrorLogin = true;
	}
}