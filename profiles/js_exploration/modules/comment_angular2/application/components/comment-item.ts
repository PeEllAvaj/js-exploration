console.log('comment-item')
import {Component, Input} from '@angular/core';

@Component({
	selector: 'comment-item',
	template: `
			<div>	
				<h3> {{comment.subject[0].value}}</h3>
				<p [innerHTML]="comment.comment_body[0].value"></p>
				-by: {{comment.name[0].value}}
			</div>
	`,
	styles:[`
	div {border: thin solid #fff;
		padding:15px;
		margin:3px;
	}	
	`]
})
export class CommentItem {
	@Input() comment
}