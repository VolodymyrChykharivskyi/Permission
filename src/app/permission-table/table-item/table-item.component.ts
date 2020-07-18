import {Component, Input, OnInit} from '@angular/core';
import { Permission } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-table-item',
  templateUrl: './table-item.component.html',
  styleUrls: ['./table-item.component.scss']
})
export class TableItemComponent implements OnInit {
  @Input() item: Permission;

  ngOnInit() {
  }
}
