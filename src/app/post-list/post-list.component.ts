import { Component } from '@angular/core';

interface PeriodKind {
  value: 'day' | 'week' | 'month' | 'year';
  label: string;
}

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.less'],
})
export class PostListComponent {
  selectedPeriod: 'day' | 'week' | 'month' | 'year' | undefined;

  constructor() {}
  items = [1, 2, 3, 4, 5, 6, 6, 7, 8, 9];
  periodTypes: PeriodKind[] = [
    { value: 'day', label: '오늘' },
    { value: 'week', label: '이번 주' },
    { value: 'month', label: '이번 달' },
    { value: 'year', label: '올해' },
  ];

  ngOnInit() {
    const [firstKindOfPeriod] = this.periodTypes;
    this.selectedPeriod = firstKindOfPeriod?.value;
  }
}
