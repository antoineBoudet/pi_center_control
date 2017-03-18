import {Component} from '@angular/core';
import myGlobals = require('./globals');

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app-component.css']
})
export class AppComponent {
	private _login : string;

	constructor () {
		if (myGlobals.email)
			this._login = myGlobals.email;
		else
			this._login = "no connected";
	}
}
