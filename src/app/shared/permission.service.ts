import {Injectable} from '@angular/core';
import {Permission} from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {
  public initState: Permission[] = [
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
    const actionValue: boolean = this.initState.filter(item => item.id !== 'sections')
      .every(el => el[action]) ? true : false;
    this.initState.forEach(item => {
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
    const idx: number = this.initState.findIndex(element => element.id === sectionName);
    const actionValue: boolean = (this.initState[idx][action]) ? false : true;
    this.initState.forEach(item => {

      // When disable permission
      if (!actionValue) {
        this.syncRelatedActions(item, action);
      }

      item[action] = actionValue;
    });
  }

  public changePermission(sectionName: string, action: string): void {
    this.initState.forEach(item => {
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

  public setLocalStorage(): void {
    const permissions = this.initState.map(item => {
      return {
        section: item.id,
        permission: {
          view: item.view,
          edit: item.edit,
          remove: item.remove
        }
      };
    });
    localStorage.setItem('permissions', JSON.stringify(permissions));
  }
}
