//Need help how the angular-comments-block DOM tag can be placed in the template

var x = document.querySelector('#block-baked-content > article > div.node__content > section')
x.innerHTML = '<angular-comments-block>Loading Angular component</angular-comments-block>'



import {Component, Pipe, OnInit, ViewEncapsulation} from 'angular2/core';
import {AsyncPipe} from "angular2/pipes";
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {CommentItem} from'./comment-item';
import {CommentsService} from '../core/comments.service'
import {FieldComment} from './field-comment';
import {CommonCommentFields} './common-comment-fields';


@Component({
	selector: 'angular-comments-block',
	providers: [CommentsService, HTTP_PROVIDERS],
	directives:[CommentItem, FieldComment, CommentItem],
	template: `
		<div class="angular-comment-block">
			<h2> Comments -via Angular</h2>
			<comment-item  *ngFor='#comment of comments '[comment]="comment"></comment-item>
		</div>
		<hr/>
		<angular2-comment-field></angular2-comment-field>
	`,
	styles: [`
		.angular-comment-block { border:thin solid #ccc; background:#eaeaea; }
	`],
	encapsulation: ViewEncapsulation.Emulated
})
export class CommentsBlock implements OnInit {
	public comments: Object;
	constructor(private _commentsService: CommentsService) {
	}

	ngOnInit(){
		this.getComments();
	}

	getComments(){
	 this._commentsService.getComments(drupalSettings.path.currentPath)
	 	.subscribe(data => { this.comments=data})
	}
}