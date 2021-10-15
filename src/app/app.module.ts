import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { ko_KR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import ko from '@angular/common/locales/ko';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostComponent } from './post/post.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { PostListComponent } from './post-list/post-list.component';
import { NzCardModule } from 'ng-zorro-antd/card';
registerLocaleData(ko);

@NgModule({
  declarations: [AppComponent, PostComponent, PostListComponent],
  imports: [
    NzGridModule,
    NzIconModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzCardModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: ko_KR }],
  bootstrap: [AppComponent],
})
export class AppModule {}
