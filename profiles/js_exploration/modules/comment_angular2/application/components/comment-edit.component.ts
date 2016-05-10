import { Component, OnInit, Input} from '@angular/core';
import { Http, HTTP_PROVIDERS } from '@angular/http';
import { CommentItem } from'./comment-item';
import { CommentsService } from '../core/comments.service'
import { Comment } from '../core/comment.model';

@Component({
    selector: 'comment-edit',
    template: `<div><input placeholder="Author" ([ngModel])="comment.author"></div>
    <div><input placeholder="Title" ([ngModel])="comment.title"></div>
    <div><textarea placeholder="Body" ([ngModel])="comment.body"></textarea></div>
    <button (click)="submit()">Submit</button>
    `
})
export class CommentEdit {
    @Input() comment : Comment;
    
    constructor(private _commentService : CommentsService) { }
    
    submit() {
        this._commentService.create(this.comment);
    }
    
}