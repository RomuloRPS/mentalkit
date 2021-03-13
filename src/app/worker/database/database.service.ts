import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { BehaviorSubject } from 'rxjs';
import { SchedulableTask } from 'src/app/worker/SchedulableTask';
import { environment } from 'src/environments/environment';
import { SqlLiteTask } from './sql-lite-task';

@Injectable({
    providedIn: 'root'
})
export class DatabaseService {
  public database: SQLiteObject;

  public tasksTable: string = `CREATE TABLE IF NOT EXISTS tasks (
                                id INTEGER PRIMARY KEY,
                                data TEXT,
                                tries INTEGER DEFAULT 0
                                );`;

  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  public constructor(public sqlite: SQLite) {

  }

  public dbState() {
      return this.isDbReady.asObservable();
  }

  public createDb() {
      this.sqlite.create({name: "tasks.db", location: "default"}).then((db: SQLiteObject) => {
          this.database = db;
          this.createTables();
      }, (error) => {
          console.log("ERROR: ", error);
      });
  }

  public async createTables() {
      try {
          await this.database.executeSql(this.tasksTable);
      }catch(e){
          console.log("Error !");
      }
  }

  public addTask(task: SchedulableTask) {
      let data = [task.id, task.serialize(), task.tries];

      if (!task.id) {
          return;
      }

      return this.database.executeSql('INSERT INTO tasks (id, data, tries) VALUES (?, ?, ?)', data);
  }

  public getTasks() {
      return this.database.executeSql('SELECT * FROM tasks', []).then((res) => {
          let items: SqlLiteTask[] = [];

          if (res.rows.length > 0) {
              for (let i = 0; i < res.rows.length; i++) {
                  items.push({
                      id: res.rows.item(i).id,
                      data: res.rows.item(i).data,
                      tries: res.rows.item(i).tries
                  });
              }
          }

          return items;
      });
  }

  public getTask(id): Promise<SqlLiteTask> {
      return this.database.executeSql('SELECT * FROM tasks WHERE id = ?', [id]).then(res => ({
          id: res.rows.item(0).id,
          tries: res.rows.item(0).tries,
          data: res.rows.item(0).data,
      }));
  }

  public updateTask(id, task: SchedulableTask) {
      let data = [task.serialize(), task.tries];

      return this.database.executeSql(`UPDATE tasks SET data = ?, tries = ? WHERE id = ${id}`, data)
          .then(data => {
              this.getTasks();
          });
  }

  public deleteTask(id) {
      return this.database.executeSql('DELETE FROM tasks WHERE id = ?', [id])
          .then(_ => {
              this.getTasks();
          });
  }

  public deleteAll() {
      return this.database.executeSql('DELETE FROM tasks', []).then(resp => {
          this.getTasks();
      });
  }
}
