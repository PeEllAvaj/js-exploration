// Temporary to place the angular-comments-block DOM tag can be placed in the template
var x = document.querySelector('#block-baked-content > article > div.node__content > section')
x.innerHTML = '<angular-comments-block>Loading Angular component</angular-comments-block>'

import { Component, OnInit } from '@angular/core';
import { Http, HTTP_PROVIDERS } from '@angular/http';
import { CommentItem } from'./comment-view.component';
import { CommentEdit } from './comment-edit.component';
import { CommentsService } from '../core/comments.service'

import { Observable } from 'rxjs/Observable';


@Component({
	selector: 'angular-comments-block',
	providers: [CommentsService, HTTP_PROVIDERS],
	directives:[CommentItem, CommentEdit],
	template: `
		<div class="angular-comment-block">
			<h2> Comments - via Angular 2</h2>
			<comment-item  *ngFor='let comment of comments '[comment]="comment"></comment-item>
		</div>
		<hr/>
		<angular2-comment-field></angular2-comment-field>
		<comment-edit *ngIf="newComment" [comment]="newComment"></comment-edit>
		<div *ngIf="!newComment"><a (click)="showCommentEditor()">New Comment</a></div>
		<div ><button *ngIf="newComment" (click)="cancel()">Cancel</button></div>
	`,
	styles: [`
		.angular-comment-block { border:thin solid #ccc; background:#eaeaea; }
	`]
})
export class CommentsBlock implements OnInit {
	public comments: Observable<json>;
	public newComment : Comment; 
	constructor(private _commentsService: CommentsService) {}

	ngOnInit(){
		this._commentsService.getComments(drupalSettings.path.currentPath)
	 	.subscribe(data => { this.comments=data})
	}
	
	showCommentEditor() {
		this.newComment = new Comment();
	}
	cancel() {
		this.newComment = false;
	}
}