import {Component, Input} from '@angular/core';

@Component({
  selector: 'videoComponent',
  styleUrls: ['./video.component.css'],
  templateUrl: './video.component.html'
})
export class VideoComponent {
    @Input() _listDir: any;

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
	// private _listDir: any = [];

//	private copyFileTab : any = [];
//	private copyFileString : any = [];
	private doSomethingFromMess: string;

	private fileSelected : string = "";
	private specVideo : any = [{
		"name": "video.mp4",
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
	private nbMaxFile : number = 12;

	private nbMinFileBackUp : number;
	private nbMaxFileBackUp : number;

	private nbPages : number = 0;

	private imgTest : string;

	constructor () {
		this.imgTest = "../../images/afficheCinema.jpg";
	}

	ngOnInit () {
		this.doSomethingFromMess = "De ...";
	}

	selectedFile(name, nameExtension, nb) {
		console.log('name = ', nameExtension);
		this.specVideo = [{
		"name": nameExtension,
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
				this.nbMaxFile = nb + 12;
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
			this.nbPages -= 1;
			this.nbMinFile -= 12;
			this.nbMaxFile -= 12;
		}
	}

	next() {
		if (this.nbMaxFile < this._listDir.length) {
			this.nbPages += 1;
			this.nbMinFile += 12;
			this.nbMaxFile += 12;
		}
	}
}
