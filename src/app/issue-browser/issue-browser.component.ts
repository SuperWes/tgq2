import { Component, OnInit } from '@angular/core';
import { issues } from '../issues';

@Component({
  selector: 'app-issue-browser',
  templateUrl: './issue-browser.component.html',
  styleUrls: ['./issue-browser.component.scss']
})
export class IssueBrowserComponent implements OnInit {
  issues = issues;
  
  constructor() { }

  ngOnInit() {

  }

}
