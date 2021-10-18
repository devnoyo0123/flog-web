import { Component } from '@angular/core';
import { NzModalLoginComponentComponent } from './nz-modal-login-component/nz-modal-login-component.component';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'flog';

  constructor(private modalService: NzModalService) {}

  onLogin() {
    this.modalService.create({
      nzContent: NzModalLoginComponentComponent,
      nzTitle: '로그인',
      nzFooter: null,
    });
  }
}
