import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule, MatButtonModule, MatGridListModule, MatListModule } from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileService } from './file.service';
import { HttpClientModule } from '@angular/common/http';
import { IssueListComponent } from './issue-list/issue-list.component';
import { IssueBrowserComponent } from './issue-browser/issue-browser.component';
import { OldSiteComponent } from './old-site/old-site.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    IssueListComponent,
    IssueBrowserComponent,
    OldSiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    FlexLayoutModule
  ],
  providers: [FileService, Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
