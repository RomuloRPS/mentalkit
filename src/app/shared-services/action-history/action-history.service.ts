import { Injectable } from '@angular/core';
import { DateTimeFormatPipe } from 'src/app/pipes/date-time-format.pipe';

export interface ActionHistory {
  id: string;
  name: string;
  type: string;
  date: string;
}

@Injectable({
    providedIn: 'root'
})
export class ActionHistoryService {
  public actions = [];

  public constructor() {}

  public setAction(action: ActionHistory) {
      let actions: Array<ActionHistory> = [];

      let savedActions = localStorage.getItem('actionHistory');

      if(savedActions) {
          actions = JSON.parse(savedActions);
      }

      actions.push(action);

      actions = actions.filter(action => {
          const day = new Date(action.date).getDate();

          if (day === new Date().getDate()) {
              return action;
          }
      });

      localStorage.setItem('actionHistory', JSON.stringify(actions));
  }

  public getActions() {
      let actions = [];
      let savedActions = localStorage.getItem('actionHistory');

      if(savedActions) {
          actions = JSON.parse(savedActions);
      }

      return actions;
  }
}
