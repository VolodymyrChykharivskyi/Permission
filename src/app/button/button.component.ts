import {Component, Input, OnInit} from '@angular/core';
import {PermissionService} from '../shared/permission.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() description: string;

  constructor(public permissionService: PermissionService) {
  }

  ngOnInit() {
  }

  onClickHandler() {
    this.permissionService.setLocalStorage();
  }
}

