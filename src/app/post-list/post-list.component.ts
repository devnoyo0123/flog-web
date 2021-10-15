import { Component } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.less'],
})
export class PostListComponent {
  constructor() {}

  items = [1, 2, 3, 4, 5, 6, 6, 7, 8, 9];
}
