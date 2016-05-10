import {COMMENTS} from './comments-mock'
import {Injectable, Location} from '@angular/core';
import {Http, HTTP_PROVIDERS} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/interval';

@Injectable()
export class CommentsService {
	constructor(private http:Http){
	}

	getComments(path : string) {
		var url: string = `${path}/comments`;
		url = Drupal.url(url);
		return this.http.get(url)
			.map(res => res.json());
	}
}