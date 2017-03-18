import {Component} from '@angular/core';
import { Router } from '@angular/router';

import {RequeteService} from '../services/requeteService';
import myGlobals = require('../globals');

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {

	private errorMessage: any;
	private _tabSelected: string = "video";
	private _optMenuCopy: boolean = false;
	private _optMenuMove: boolean = false;
	private _optMenuRemove: boolean = false;
	private _optMenuRename: boolean = false;

	private _evtMenu: boolean = false;
	private _firstInput: boolean = true;
	private _pathFirstInput: string = "";
	private _pathSecondInput: string = "";

	private _path: string = "/video";
	private _listDir: any = [];

//	private copyFileTab : any = [];
//	private copyFileString : any = [];
	private doSomethingFromMess: string;

	private fileSelected : string = "";
	private specVideo : any = [{
		"name": "film3.mkv",
		"resume": `Philippe Abrams est directeur de la poste de Salon-de-Provence. 
		Il est marié à Julie, dont le caractère dépressif lui rend la vie impossible. 
		Pour lui faire plaisir, Philippe fraude afin d'obtenir une mutation sur la Côte d'Azur. 
		Mais il est démasqué: il sera muté à Bergues, petite ville du Nord. 
		Pour les Abrams, sudistes pleins de préjugés, le Nord c'est l'horreur, une région glacée, 
		peuplée d'êtres rustres, éructant un langage incompréhensible, le 'cheutimi'. Philippe ira seul. 
		À sa grande surprise, il découvre un endroit charmant, une équipe chaleureuse, des gens accueillants, et se fait un ami : 
		Antoine, le facteur et le carillonneur du village, à la mère possessive et aux amours contrariées. 
		Quand Philippe revient à Salon, Julie refuse de croire qu'il se plait dans le Nord. 
		Elle pense même qu'il lui ment pour la ménager. Pour la satisfaire et se simplifier la vie, Philippe lui fait croire qu'en effet, 
		il vit un enfer à Bergues.`
	}];

	private imgSelected : string = "";
	private musiquesSelected : string = "";

	private nbMinFile : number = 0;
	private nbMaxFile : number = 6;

	private nbMinFileBackUp : number;
	private nbMaxFileBackUp : number;


	private imgTest : string;

	constructor (private router: Router, private _requeteService:RequeteService) {
		this.imgTest = "../../images/afficheCinema.jpg";
		if (myGlobals.connect != true)
	        this.router.navigate(['/login']);
	}

	ngOnInit () {
		this.doSomethingFromMess = "De ...";
		this.listDir("video");
	}


	activOptMenu(nameOpt) {
		(nameOpt == "copy") ? (this._optMenuCopy = !this._optMenuCopy,
								this._optMenuMove = false,
								this._optMenuRemove = false,
								this._optMenuRename = false,
								this._evtMenu = true) : (0);
		
		(nameOpt == "move") ? (this._optMenuMove = !this._optMenuMove,
								this._optMenuCopy = false,
								this._optMenuRemove = false,
								this._optMenuRename = false,
								this._evtMenu = true) : (0);
		
		(nameOpt == "rename") ? (this._optMenuRename = !this._optMenuRename,
								this._optMenuCopy = false,
								this._optMenuRemove = false,
								this._optMenuMove = false,
								this._evtMenu = true) : (0);

		(nameOpt == "remove") ? (this._optMenuRemove = !this._optMenuRemove,
								this._optMenuRename = false,
								this._optMenuCopy = false,
								this._optMenuMove = false,
								this._evtMenu = true) : (0);

		//this.doSomethingFromMess = this.copyFileString;
	}

	tabControl(nameTab){
		(nameTab == "video") ? (this._tabSelected = nameTab, this._path = "/" + nameTab) : (0);
		(nameTab == "images") ? (this._tabSelected = nameTab, this._path = "/" + nameTab) : (0);
		(nameTab == "musique") ? (this._tabSelected = nameTab, this._path = "/" + nameTab) : (0);
		this.listDir(nameTab);
	}

	desactivOptMenu(nameOpt) {
		(nameOpt == "copy") ? (this._optMenuCopy = false, this._evtMenu = false) : (0);
		(nameOpt == "move") ? (this._optMenuMove = false, this._evtMenu = false) : (0);
		(nameOpt == "rename") ? (this._optMenuRename = false, this._evtMenu = false) : (0);
		(nameOpt == "remove") ? (this._optMenuRemove = false, this._evtMenu = false) : (0);

		//this._requeteService.copyFile(this._path.replace(/\//g, "").replace("/", "-") + "-" + this.doSomethingFromMess.replace("/", "-"), "video-test")
		//	.subscribe(
		//		error => this.errorMessage = <any>error);

		//this.doSomethingFromMess = "";
		//this.copyFileTab = [];
	 }

	listDir(typeFolder){
		this._requeteService.listDir(typeFolder)
			.subscribe(
				value => this._listDir = value,
				error => this.errorMessage = <any>error);
	}
	
	changInput(name) {
	 	if (name == "first"){
	 		this._firstInput = true;	 	
	 	}
	 	else if (name == "second"){
	 		this._firstInput = false;	 	
	 	}
	 }

	/* changeFolder(nameFolder) {
	 	this._path += "/" + nameFolder;
	 	if (this._evtMenu == true && this._firstInput == false){
	 		this._pathSecondInput = this._path;
	 	}
	 	if (this._evtMenu == true && this._firstInput == true){
	 		this._pathFirstInput = this._path;
	 	}
	 	this._listDir = this._listDir2;
	 	console.log('this._path', this._path);
	 } */

	/* goToBack() {
	 	console.log('value', this._listDir);
	 	this._path = this.removeLastDir(this._path);
	 	if (this._evtMenu == true && this._firstInput == false){
	 		this._pathSecondInput = this._path;
	 	}
	 	if (this._evtMenu == true && this._firstInput == true){
	 		this._pathFirstInput = this._path;
	 	}
	 	console.log('this._path', this._path);
	 	this._listDir = this._listDir1;
	 } */

	 removeLastDir(name) {
	 	var len = name.length;
	 	var newName: string = "";
	 	var cpt;
	 	var save : boolean = false;
	 	for (cpt = len - 1; cpt >= 0; cpt--) {
	 		if (save == true){
	 			newName += name[cpt];
	 		}
	 		(name[cpt] == '/') ? (save = true) : (0);
	 	}
	 	return (newName.split("").reverse().join(""));
	 }
	
	//selectVideo(name) {
	//	this.copyFileTab.push({"name" : name});
	//	if (this.copyFileString != "")
	//		this.copyFileString += ", " + name;
	//	else
	//		this.copyFileString += name;
	//}

	selectedFile(name, nb) {
		this.specVideo = [{
		"name": name,
		"resume": `Philippe Abrams est directeur de la poste de Salon-de-Provence. 
			Il est marié à Julie, dont le caractère dépressif lui rend la vie impossible. 
			Pour lui faire plaisir, Philippe fraude afin d'obtenir une mutation sur la Côte d'Azur. 
			Mais il est démasqué: il sera muté à Bergues, petite ville du Nord. 
			Pour les Abrams, sudistes pleins de préjugés, le Nord c'est l'horreur, une région glacée, 
			peuplée d'êtres rustres, éructant un langage incompréhensible, le 'cheutimi'. Philippe ira seul. 
			À sa grande surprise, il découvre un endroit charmant, une équipe chaleureuse, des gens accueillants, et se fait un ami : 
			Antoine, le facteur et le carillonneur du village, à la mère possessive et aux amours contrariées. 
			Quand Philippe revient à Salon, Julie refuse de croire qu'il se plait dans le Nord. 
			Elle pense même qu'il lui ment pour la ménager. Pour la satisfaire et se simplifier la vie, Philippe lui fait croire qu'en effet, 
			il vit un enfer à Bergues.`
		}];
		(this.fileSelected == "") ? (this.fileSelected = name) : (this.fileSelected = "");
		if (this.fileSelected != "") {
			this.nbMinFileBackUp = this.nbMinFile;
			this.nbMaxFileBackUp = this.nbMaxFile;
			if (nb >= this.nbMaxFile - 2) {
				

				this.nbMinFile = nb - 1;
				this.nbMaxFile = nb + 6;
			}
			if (nb <= this.nbMinFile + 3) {
				this.nbMaxFile -= 2;
			}
		}
		else {
			this.nbMinFile = this.nbMinFileBackUp;
			this.nbMaxFile = this.nbMaxFileBackUp;
		}
	}

	selectedImg(name) {
		this.imgSelected = name;
	}

	selectedMusiques(name) {
		this.musiquesSelected = name;
	}

	back() {
		if (this.nbMinFile != 0) {
			this.nbMinFile -= 6;
			this.nbMaxFile -= 6;
		}
	}

	next() {
		if (this.nbMaxFile < this._listDir.length) {
			this.nbMinFile += 6;
			this.nbMaxFile += 6;
		}
	}
}