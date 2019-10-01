import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileService } from './file.service';
import { HttpClientModule } from '@angular/common/http';
import { IssueListComponent } from './issue-list/issue-list.component';

@NgModule({
  declarations: [
    AppComponent,
    IssueListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [FileService, Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
