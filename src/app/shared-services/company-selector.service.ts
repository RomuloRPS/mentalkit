import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';

@Injectable({
    providedIn: 'root'
})
export class CompanySelectorService {
    public constructor(private alertController: AlertController, private userModel: UserModel) { }

    public saveLocalStorage(key: string, Object) {
        localStorage.setItem(key, JSON.stringify(Object));
    }

    public getFromLocalStorage(key: string) {
        const object = localStorage.getItem(key);

        if (object) {
            return JSON.parse(object);
        } else {
            return [];
        }
    }

    public setTenancies(tenancies) {
        this.saveLocalStorage('tenancies', tenancies);
    }

    public setSelectedCompany(company) {
        this.saveLocalStorage('selected_company', company);
    }

    public setSelectedTenancy(tenancy) {
        this.saveLocalStorage('selected_tenancy', tenancy);
    }

    public getTenancies() {
        return this.getFromLocalStorage('tenancies');
    }

    public getSelectedTenancy() {
        return this.getFromLocalStorage('selected_tenancy');
    }

    public getSelectedCompany() {
        return this.getFromLocalStorage('selected_company');
    }

    public selectCompany(tenancies: any) {
        return new Observable((observer) => {
            const btns = [];

            for (const tenancy of tenancies) {
                btns.push({
                    text: tenancy.company.complete_name,
                    role: '',
                    icon: 'bussines',
                    handler: () => {
                        this.userModel.set('selectedTenancy', tenancy);
                        this.userModel.set('selectedCompany', tenancy.company);
                        this.userModel.save();
                        observer.next();
                        observer.complete();
                    }
                });
            }

            btns.push({
                text: 'CANCELAR',
                role: 'cancel',
                handler: () => {
                    observer.error('no company selected');
                }
            });

            this.alertController.create({
                header: 'Selecione a empresa',
                buttons: btns,
                animated: true
            }).then((createdActionSheet) => {
                createdActionSheet.present();
            });
        }).toPromise();
    }
}
