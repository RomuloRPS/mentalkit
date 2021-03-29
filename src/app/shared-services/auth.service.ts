import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserModel } from '../models/user.model';
import { DateTimeFormatPipe } from '../pipes/date-time-format.pipe';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
  private api = environment.api;

  public constructor(
      private http: HttpClient,
      private userModel: UserModel
  ) {

  }

  public login(data) {
      return this.http.post(this.api + '/login', data).toPromise();
  }

  public forget(data) {
      return this.http.post(this.api + '/password/forget', data).toPromise();
  }

  public updateLastRouteSelectionAt(userId) {
      const options = {
          last_route_selection_at: new DateTimeFormatPipe().transform(new Date(), 'yyyy-MM-dd HH:mm:ss'),
      };

      let tenancyId;

      this.userModel.load();

      const tenancy = this.userModel.get('selectedTenancy');

      if (tenancy) {
          tenancyId = tenancy.id;
      }

      return this.http.put(this.api + '/tenancies/' + tenancyId + '/system/users/' + userId + '/update-last-route-selection-at', options);
  }

  public updateDevice(userId, token) {
      const options = {
          deviceToken: token,
          app: 'PLATFORM',
          pushService: 'ONESIGNAL'
      };

      let tenancyId;

      this.userModel.load();

      const tenancy = this.userModel.get('selectedTenancy');

      if (tenancy) {
          tenancyId = tenancy.id;
      }

      return this.http.put(this.api + '/tenancies/' + tenancyId + '/system/users/' + userId + '/update-device-token', options);
  }
}
