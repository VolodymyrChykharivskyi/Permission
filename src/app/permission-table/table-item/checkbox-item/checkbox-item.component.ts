import {Component, Input, OnInit} from '@angular/core';
import {PermissionService} from '../../../shared/permission.service';

@Component({
  selector: 'app-checkbox-item',
  templateUrl: './checkbox-item.component.html',
  styleUrls: ['./checkbox-item.component.scss']
})
export class CheckboxItemComponent implements OnInit {
  @Input() checked: boolean;
  @Input() sectionName: string;
  @Input() description: string;
  @Input() action: string;
  @Input() disabled: boolean;

  constructor(private permissionService: PermissionService) {
  }

  ngOnInit() {
  }

  onChangeCheck(): void {
    if (this.sectionName === 'sections') {
      this.permissionService.chooseAllPermission(this.sectionName, this.action);
      return;
    }
    this.permissionService.changePermission(this.sectionName, this.action);
  }
}
