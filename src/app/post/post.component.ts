import { Component, Input } from '@angular/core';
import { Post } from './interfaces/post.schema';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.less'],
})
export class PostComponent {
  @Input() post: Post | undefined;
  constructor() {}

  getShorteningContent(content: string) {
    console.log(content);
    const [shortenContent] = content.split('\\n');
    return shortenContent;
  }
}
