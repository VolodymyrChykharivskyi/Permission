import {Component, OnInit} from '@angular/core';
import {PermissionService} from '../shared/permission.service';

@Component({
  selector: 'app-permission-table',
  templateUrl: './permission-table.component.html',
  styleUrls: ['./permission-table.component.scss']
})
export class PermissionTableComponent implements OnInit {
  constructor(public permissionService: PermissionService) {
  }

  ngOnInit() {
  }
}
