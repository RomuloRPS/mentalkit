import axios, { AxiosInstance, AxiosRequestConfig, ResponseType } from 'axios';
import { HttpClient, SingularResponse } from 'coloquent';
import { UserResourceModel } from 'src/app/coloquent-model/user/user.model';
import { UserModel } from 'src/app/models/user.model';
import { RequestHandler } from './request-handler.service';

export class HttpClientService implements HttpClient {
    public withLoader = true;
    public withErrorAlert = true;

    private requestHandler: RequestHandler;
    private axiosInstance: AxiosInstance;
    private requestConfig: AxiosRequestConfig = {
        headers: {}
    };

    public constructor(
    ) {
        this.requestHandler = new RequestHandler;
        this.axiosInstance = axios.create();
    }

    public async prepareAuthentication() {
        let jwt = localStorage.getItem('JWT');

        if (jwt) {
            this.requestConfig.headers['Authorization'] = 'Bearer ' + jwt;
        }
    }

    public setBaseUrl(baseUrl) {
        this.axiosInstance.defaults.baseURL = baseUrl;
    }

    public setResponseType(responseType: ResponseType) {
        this.requestConfig.responseType = responseType;
    }

    public setWithCredentials(withCredientials) {
        this.axiosInstance.defaults.withCredentials = withCredientials;
    }

    public async get(url: string, params?: any) {
        await this.prepareAuthentication();

        if (params) {
            let query = this.buildQuery(params);

            url = url + "?" + query;
        }

        return <any>this.requestHandler.handle(this, this.axiosInstance.get(url, this.requestConfig));
    }

    public async delete(url: string) {
        await this.prepareAuthentication();

        return <any>this.requestHandler.handle(this, this.axiosInstance.delete(url, this.requestConfig));
    }

    public async head(url: string) {
        await this.prepareAuthentication();

        return <any>this.requestHandler.handle(this, this.axiosInstance.head(url, this.requestConfig));
    }

    public async post(url: string, data?: any) {
        await this.prepareAuthentication();

        return <any>this.requestHandler.handle(this, this.axiosInstance.post(url, data, this.requestConfig));
    }

    public async put(url: string, data?: any) {
        await this.prepareAuthentication();

        return <any>this.requestHandler.handle(this, this.axiosInstance.put(url, data, this.requestConfig));
    }

    public async patch(url: string, data?: any) {
        await this.prepareAuthentication();

        return <any>this.requestHandler.handle(this, this.axiosInstance.put(url, data, this.requestConfig));
    }

    public getImplementingClient() {
        return this.axiosInstance;
    }

    /**
    * Transforma um objeto em uma queryString
    * @param obj
    * @param numPrefix
    * @param tempKey
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
