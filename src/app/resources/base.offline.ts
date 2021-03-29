import { Injector } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { BaseOfflineFilter } from './base-offline-filter';
import { GenericCollectionModel } from './generic-collection.model';

export abstract class BaseOffline {
    protected title: string = this.constructor.name;
    protected descriptionOnStore;
    protected descriptionOnUpdate;
    protected descriptionOnDestroy;
    protected titleOnStore;
    protected titleOnUpdate;
    protected titleOnDestroy;
    protected genericCollectionModel: GenericCollectionModel;
    protected offlineFilter: BaseOfflineFilter;
    private onlyOffline = false;
    protected abstract name: string ;

    public constructor(private injector: Injector) {
        this.genericCollectionModel = injector.get(GenericCollectionModel);
    }

    public setOnlyOffline(onlyOffline) {
        this.onlyOffline = onlyOffline;
    }

    public get(fnRemote, filters) {
        return new Observable((observer) => {
            this.genericCollectionModel.load(this.name).toPromise().then((res: any) => {
                const offlineData = res;

                if (this.offlineFilter) {
                    this.offlineFilter.apply(filters, offlineData).subscribe((response) => {
                        this.returnOfflineResponse(response, fnRemote, observer);
                    });
                } else {
                    let errorMessage = `The class [${this.constructor.name}] `;

                    errorMessage += 'must have property [offlineFilter] to be able to make offline filter';
                    console.error(errorMessage);
                }
            });
        });
    }

    public returnOfflineResponse(offlineData, fnRemote, observer) {
        const offlineResponse = {
            data: offlineData,
            isOffline: true,
        };

        // Manda uma pré resposta do carregado offline
        observer.next(offlineResponse);

        if (!this.onlyOffline) {
            // Tenta processar a req..
            fnRemote().subscribe((res) => {
                // Se conseguir, atualiza o conteúdo em cache
                this.genericCollectionModel.set('data', res.data)
                    .save(this.name)
                    .subscribe(() => {
                        // Emite o valor atualizado do backend
                        observer.next(res);
                        observer.complete(res);
                    });
            }, (error) => {
                observer.complete(offlineResponse);
            });
        } else {
            observer.complete();
        }
    }

    public cacheData(res) {
        return new Observable((observer: Observer<any>) => {
            this.genericCollectionModel.set('data', res.data);

            if (res.included) {
                this.genericCollectionModel.set('included', res.included);
            }

            if (res.meta) {
                this.genericCollectionModel.set('meta', res.meta);
            }

            this.genericCollectionModel.save(this.name).toPromise().then(() => {
                observer.next(true);
            }).catch((error) => {
                observer.error(true);
            });
        });
    }

    protected description = (data) => data.name;

    // store(url, data) {
    //     return this.queueModel.addTask((task: Task) => {
    //         task
    //             .setName(this.name)
    //             .setTitle(this.titleOnStore ? this.titleOnStore : this.title)
    //             .setDescription(this.descriptionOnStore ? this.descriptionOnStore : this.description)
    //             .setMethod('post')
    //             .setUrl(url)
    //             .setData(data)
    //     });
    // }

    // update(url, data) {
    //     return this.queueModel.addTask((task: Task) => {
    //         task
    //             .setName(this.name)
    //             .setTitle(this.titleOnUpdate ? this.titleOnUpdate : this.title)
    //             .setDescription(this.descriptionOnUpdate ? this.descriptionOnUpdate : this.description)
    //             .setMethod('put')
    //             .setUrl(url)
    //             .setData(data)
    //     });
    // }

    // destroy(url, data) {
    //     return this.queueModel.addTask((task: Task) => {
    //         task
    //             .setName(this.name)
    //             .setTitle(this.titleOnDestroy ? this.titleOnDestroy : this.title)
    //             .setDescription(this.descriptionOnDestroy ? this.descriptionOnDestroy : this.description)
    //             .setMethod('delete')
    //             .setUrl(url)
    //             .setData(data)
    //     });
    // }
}
