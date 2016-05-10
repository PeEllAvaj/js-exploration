import { COMMENTS } from './comments-mock'
import { Injectable, Location } from '@angular/core';
import { Http, HTTP_PROVIDERS } from '@angular/http';
import { Comment } from 'comment.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/interval';

@Injectable()
export class CommentsService {
	constructor(private http:Http) {}

	getComments(path : string) : Observable<json> {
		let url = `${path}/comments`;
		url = Drupal.url(url);
		return this.http.get(url)
			.map(res => res.json());
	}
	
	// This doesn't work, pending improved RESTful support from Drupal8
	create(comment : Comment) {
		/*let url : string;
		url = drupalSettings.path.currentPath + '/comments';
		url = 'entity/node?_format=hal+json';
		url = Drupal.url(url);
		let body : string;
		body = JSON.stringify(comment);
		body = '{"_links":{"type":{"href":"' + Drupal.url('rest/type/node/page') + '"}}, "title":[{"value":"My first page"}]}';
		
		let response = this.http.post(url, body);
		response.subscribe(
			next => console.log(next),
			err => console.error(err),
			() => console.log('finished')
		);*/
	}
}