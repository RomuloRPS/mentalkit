import { AxiosPromise } from 'axios';
import { AxiosHttpClientPromise } from 'coloquent/dist/httpclient/axios/AxiosHttpClientPromise';
import { HttpClientService } from 'src/app/services/http/http-client.service';

export class HttpError {
    public isHttpError = true;
    private status;
    private description;

    public setStatus(status) {
        this.status = status;

        return this;
    }

    public setDescription(description) {
        this.description = description;

        return this;
    }

    public getStatus() {
        return this.status;
    }

    public getDescription() {
        return this.description;
    }

    public getPrettyDescription() {
        switch (this.status) {
            case 401:
                return "Não autorizado a acessar a rota";
            case 404:
                return "Alguma rota não foi encontrada, cheque o console...";
            case 422:
                return "Parece que algum campo obrigatório não foi preenchido corretamente";
            default:
                return 'Erro interno do servidor';
        }
    }

    public serialize() {
        return { message: JSON.stringify(this) };
    }
}

export class RequestHandler {
    public constructor() { }

    public async handle(request: HttpClientService, promise: AxiosPromise) {
        let handlerPromise = new Promise((resolve, reject) => {
            promise
                .then(response => resolve(response))
                .catch((error) => {
                    let httpError = this.proccessRequestError(error.response);

                    reject(httpError.serialize());
                })
                .finally(() => {
                    this.completeRequest();
                });
        });

        return new AxiosHttpClientPromise(<any>handlerPromise);
    }

    private proccessRequestError(error) {
        let httpError = new HttpError;

        httpError.setStatus(0);

        if (error) {
            if (error.status) {
                httpError.setStatus(error.status);
            }

            if (error.error) {
                httpError.setDescription(JSON.stringify(error.error));
            }
        }

        return httpError;
    }

    private completeRequest() {

    }
}
