import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IssueBrowserComponent } from './issue-browser/issue-browser.component';
import { OldSiteComponent } from './old-site/old-site.component';

const routes: Routes = [
  { path: '', component: IssueBrowserComponent },
  { path: 'old', component: OldSiteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
