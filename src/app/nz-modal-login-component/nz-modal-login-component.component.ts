import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-nz-modal-login-component',
  template: `
    <form nz-form class="login-form" [formGroup]="validateForm" (ngSubmit)="submitForm()">
      <h4>이메일로 로그인하기</h4>
      <nz-input-group nzSearch nzSize="large" [nzAddOnAfter]="suffixButton">
        <input type="text" nz-input placeholder="이메일을 입력하세요." formControlName="email" />
      </nz-input-group>
      <ng-template #suffixButton>
        <button class="button" nz-button nzType="primary" nzSize="large" nzSearch>로그인</button>
      </ng-template>
    </form>
  `,
  styleUrls: ['./nz-modal-login-component.component.less'],
})
export class NzModalLoginComponentComponent {
  isVisible = false;
  validateForm: FormGroup;

  constructor(private modal: NzModalService, private formBuilder: FormBuilder, private router: Router) {
    this.validateForm = this.formBuilder.group({
      email: '',
    });
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  submitForm() {
    this.modal.closeAll();
    this.modal.afterAllClose.subscribe(() => {
      this.router.navigate(['/write']);
    });
  }
}
