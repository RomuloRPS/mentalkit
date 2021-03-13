import { Component, OnInit, OnDestroy } from '@angular/core';
import { DateTimeFormatPipe } from 'src/app/pipes/date-time-format.pipe';

@Component({
    selector: 'app-integration',
    templateUrl: './integration.page.html',
    styleUrls: ['./integration.page.scss'],
})
export class IntegrationPage implements OnInit, OnDestroy {
  public loading = false;
  public hasData = true;
  public selectedTasks = [];
  public tasks = [];
  public interval;

  public skeletonCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  public constructor(

  ) { }

  public ngOnInit() {
      this.loading = true;
      this.getTasks();
  }

  public getTasks() {
      this.tasks = [];

      this.loading = false;
  }

  public getEncodedTasks() {
      return this.tasks;
  }

  public getType(name) {
      switch (name) {
          case 'tenancies/:tenancy_id/transport-tasks/program-confirm':
              return 'Nova Tarefa';
          case 'tenancies/:tenancy_id/transport-tasks/execute':
              return 'Tarefa';
          case 'tenancies/:tenancy_id/transport-tasks/cancel':
              return 'Não Execução';
          case 'tenancies/:tenancy_id/waste-movements':
              return 'Inventário';
          default:
              return '';
      }
  }

  public getIcon(name) {
      switch (name) {
          case 'tenancies/:tenancy_id/transport-tasks/program-confirm':
              return '../../../assets/icons/elo-collect.svg';
          case 'tenancies/:tenancy_id/transport-tasks/execute':
              return '../../../assets/icons/elo-task.svg';
          case 'tenancies/:tenancy_id/transport-tasks/cancel':
              return '../../../assets/icons/elo-close.svg';
          case 'tenancies/:tenancy_id/waste-movements':
              return '../../../assets/icons/elo-waste.svg';
      }
  }

  public getColor(name) {
      if (name === 'tenancies/:tenancy_id/transport-tasks/cancel') {
          return 'danger';
      }

      return 'primary';
  }

  public async deleteTasks() {
      this.loading = true;

      const idsToDelete = [];

      this.selectedTasks.forEach((task) => {
          idsToDelete.push(task.id);
      });
  }

  public unSelectTasks() {
      this.selectedTasks = [];
      this.loading = false;
  }

  public selectTask(task) {
      if (this.isSelected(task)) {
          const taskIndex = this.selectedTasks.findIndex((taskToFind => taskToFind.id == task.id));

          this.selectedTasks.splice(taskIndex, 1);
      } else {
          this.selectedTasks.push(task);
      }
  }

  public isSelected(task) {
      const tasker = this.selectedTasks.find(taskToFind => taskToFind.id == task.id);

      if (tasker) {
          return 'medium';
      } else {
          return '';
      }
  }

  public runOnce() {
      this.loading = true;
  }

  public addToActionHistory(task) {

  }

  public ngOnDestroy() {
      clearInterval(this.interval);
  }
}
