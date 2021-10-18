import { Component, Input } from '@angular/core';
import { Post } from './interfaces/post.schema';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.less'],
})
export class PostComponent {
  @Input() post: Post | undefined;
  constructor(private router: Router) {}

  getShorteningContent(content: string) {
    const [shortenContent] = content.split('\\n');
    return shortenContent;
  }
}
