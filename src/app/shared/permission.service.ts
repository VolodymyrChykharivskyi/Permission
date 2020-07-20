import {Injectable} from '@angular/core';
import {Permission} from '../interfaces/interfaces';
import {LocalStorageService} from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {
  constructor(private localStorageService: LocalStorageService) {
  }
  public state: Permission[] = [
    {id: 'sections', view: false, edit: false, remove: false},
    {id: 'calendar', view: false, edit: false, remove: false},
    {id: 'profile', view: false, edit: false, remove: false},
    {id: 'property', view: false, edit: false, remove: false},
    {id: 'contacts', view: false, edit: false, remove: false},
  ];

  private syncRelatedActions(item: Permission, action: string): void {
    if (action === 'view') {
      item.edit = false;
      item.remove = false;
    } else if (action === 'edit') {
      item.remove = false;
    }
  }

  private changeForAllPermissions(action): void {
    const actionValue: boolean = this.state.filter(item => item.id !== 'sections')
      .every(el => el[action]) ? true : false;
    this.state.forEach(item => {
      if (item.id === 'sections') {

        // When disable permission
        if (!actionValue) {
          this.syncRelatedActions(item, action);
        }

        item[action] = actionValue;
      }
    });
  }

  public chooseAllPermission(sectionName: string, action: string): void {
    const idx: number = this.state.findIndex(element => element.id === sectionName);
    const actionValue: boolean = (this.state[idx][action]) ? false : true;
    this.state.forEach(item => {

      // When disable permission
      if (!actionValue) {
        this.syncRelatedActions(item, action);
      }

      item[action] = actionValue;
    });
  }

  public changePermission(sectionName: string, action: string): void {
    this.state.forEach(item => {
      if (item.id === sectionName) {
        const actionValue: boolean = !item[action];

        // When disable permission
        if (!actionValue) {
          this.syncRelatedActions(item, action);
        }

        item[action] = actionValue;
      }
    });
    this.changeForAllPermissions(action);
  }

  public saveData(): void {
    const permissions = this.state.map(item => {
      return {
        section: item.id,
        permission: {
          view: item.view,
          edit: item.edit,
          remove: item.remove
        }
      };
    });
    this.localStorageService.set('permissions', permissions);
  }
}
