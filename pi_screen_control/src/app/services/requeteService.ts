import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RequeteService {

    constructor (public http: Http){

    }

    listDir(folder) : Observable<Comment[]>{
        var url = "http://127.0.0.1:5000/getListDir/" + folder;
        return this.http.get(url)
                 .map((res:Response) => res.json())
                 .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}

	copyFile(file, folderTarget) : Observable<Comment[]>{
    	console.log('file', file);
    	console.log('folderTarget', folderTarget);
        var url = "http://127.0.0.1:5000/copyFile/" + file + "/" + folderTarget;
    	console.log('url', url);
        return this.http.get(url)
                 .map((res:Response) => res.json())
                 .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
}