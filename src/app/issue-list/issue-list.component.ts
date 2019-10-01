import { Component, OnInit } from '@angular/core';

import { issues } from '../issues';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.scss']
})
export class IssueListComponent implements OnInit {
  issues = issues;

  constructor() { }

  ngOnInit() {
  }
}
 