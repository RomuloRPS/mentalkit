import { Injectable } from "@angular/core";
import { UserModel } from '../models/user.model';
import { environment } from 'src/environments/environment';

declare let escape: any;

@Injectable()
export class HttpUtil {
  public url: string = environment.api;

  public  constructor(private userModel: UserModel) {
      this.userModel.load();
  }

  public buildUrl(uri, params = {}) {
      return this.bindParams(this.url + uri + "?" + this.buildQuery(params));
  }

  public buildUrlWithToken(uri, params = {}) {
      return this.buildUrl(uri, { ...params, ...{ token: this.userModel.get('JWT') } });
  }

  public bindParams(url: string) {
      let tenancyId;

      this.userModel.load();

      if (this.userModel.load().get("selectedTenancy")) {
          tenancyId = this.userModel.get("selectedTenancy").id;
      }

      const language = window.navigator.language.toLowerCase();

      const newUrl = url.replace('tenancies', 'lang/' + language + '/tenancies');

      return newUrl.replace(":tenancy_id", tenancyId);
  }

  /**
   * Transforma um objeto em uma queryString
   * @param obj;
   * @param numPrefix;
   * @param tempKey;
   * Adaptado de: https://gist.github.com/luk-/2722097
   */
  public buildQuery(obj, num_prefix?, temp_key?) {
      let output_string = [];

      obj = !obj ? {} : obj;

      Object.keys(obj).forEach((val) => {
          let key = val;

          if (num_prefix && !isNaN(<any>key)) {
              key = num_prefix + key;
          }

          key = encodeURIComponent(key.replace(/[!'()*]/g, escape));

          if (temp_key) {
              key = temp_key + '[' + key + ']';
          }

          if (typeof obj[val] === 'object') {
              let query = this.buildQuery(obj[val], null, key);

              if (query) {
                  output_string.push(query);
              }
          } else {
              let value = encodeURIComponent(obj[val] + ''.replace(/[!'()*]/g, escape));

              if (key) {
                  output_string.push(key + '=' + value);
              }
          }
      });

      return output_string.join('&');
  }
}
