import { Injector } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { BaseOffline } from './base.offline';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HttpTaskService } from '../shared-services/http-task/http-task.service';
import { UserModel } from '../models/user.model';
import { HttpUtil } from './http.util';
import { Worker } from '../worker/Worker';

export abstract class BaseResourceHttp {
  protected resourceUrl: string;
  protected offline = false;
  protected onlyOffline = false;
  protected offlineResource: BaseOffline;
  protected api: HttpClient;
  protected httpUtil: HttpUtil;
  protected apiUrl = environment.api;
  protected userModel: UserModel;
  protected worker: Worker;

  public constructor(private injector: Injector) {
      this.api = this.injector.get(HttpClient);
      this.userModel = this.injector.get(UserModel);
      this.httpUtil = this.injector.get(HttpUtil);
      this.worker = this.injector.get(Worker);
      this.resetConfig();
  }

  public bindParams(url: string) {
      let tenancyId;

      this.userModel.load();

      const tenancy = this.userModel.get('selectedTenancy');

      if (tenancy) {
          tenancyId = tenancy.id;
      }

      return url.replace(':tenancy_id', tenancyId);
  }

  public setOffline(offline) {
      this.offline = offline;

      if (offline && !this.offlineResource) {
          throw new Error(('You must specify a offlineResource property in [' + this.constructor.name + '] to make offline requests!'));
      }
  }

  public setOnlyOffline(isOnlyOffline) {
      this.onlyOffline = isOnlyOffline;
      this.setOffline(isOnlyOffline);
      this.offlineResource.setOnlyOffline(this.onlyOffline);

      return this;
  }

  public getOfflineResource() {
      if (this.offlineResource) {
          return this.offlineResource;
      }

      throw new Error(('You must specify a offlineResource property in [' + this.constructor.name + '] to cache requests!'));
  }

  public get(data?) {
      let url = this.bindParams(this.resourceUrl);
      let fnReturn;

      if (data) {
          let query = this.httpUtil.buildQuery(data);

          url = url + "?" + query;
      }

      const remote = () => this.api.get(this.apiUrl + '/' + url);

      if (this.offline) {
          fnReturn = this.offlineResource.get(remote, data);
      } else {
          fnReturn = remote();
      }

      this.resetConfig();

      return fnReturn;
  }

  public getById(id, data?) {
      let url = this.bindParams(this.resourceUrl);
      let fnReturn;

      if (data) {
          let query = this.httpUtil.buildQuery(data);

          url = url + "/" + id + "?" + query;
      }

      const remote = () => this.api.get(this.apiUrl + '/' + url);

      fnReturn = remote();

      this.resetConfig();

      return fnReturn;
  }

  public store(data?) {
      return new Observable((observer: Observer<any>) => {
          const httpTask = new HttpTaskService();
          const url = this.bindParams(this.resourceUrl);

          httpTask.setData(data);
          httpTask.setName(this.resourceUrl);
          httpTask.setUrl(this.apiUrl + '/' + url);
          httpTask.setMethod('post');
          this.worker.addTask(httpTask).then((resp) => {
              observer.next('success');
              observer.complete();
          }).catch((error) => {
              console.log(error);
              observer.error(error);
              observer.complete();
          });
      });
  }

  public cache(filter?) {
      return new Observable((observer: Observer<any>) => {
      // Desabilita o offline
          this.setOffline(false);
          // Carrega os dados
          this.get(filter).toPromise().then((response) => {
              // Faz o cache dos dados

              this.getOfflineResource().cacheData(response).subscribe((res) => {
                  observer.next(res);
                  observer.complete();
              });
          }).catch(error => {
              observer.error(error);
              observer.complete();
          });
      });
  }

  private resetConfig() {
      this.onlyOffline = false;
  }

    // destroy(data) {
    //   if (typeof data != 'object') {
    //     data = { id: [data] };
    //   }

    //   let fnReturn;

    //   if (this.offline) {
    //     fnReturn = this.offlineResource.update(this.resourceUrl, data);
    //   } else {
    //     fnReturn = this.api.delete(this.resourceUrl + "/0");
    //   }

    //   this.resetConfig();
    //   return fnReturn;
    // }

    // view(id, data?) {
    //   if (this.offline) {
    //     console.warn('Unable to make offline view');
    //   }

    //   return this.api.get(this.resourceUrl + "/" + id, data);
    // }

    //   this.resetConfig();
    //   return fnReturn;
    // }

    // update(data) {

    //   let fnReturn;

    //   if (this.offline) {
    //     fnReturn = this.offlineResource.update(this.resourceUrl + "/" + data.id, data);
    //   } else {
    //     fnReturn = this.api.put(this.resourceUrl + "/" + data.id, data);
    //   }

    //   this.resetConfig();
    //   return fnReturn;
    // }
}
