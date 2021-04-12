import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SingularResponse } from 'coloquent';
import { environment } from 'src/environments/environment';
import { UserResourceModel } from '../coloquent-model/user/user.model';
import { UserModel } from '../models/user.model';

@Injectable({
    providedIn: 'root'
})

export class UserService {
    public constructor(
        private userModel: UserModel,
        private httpClient: HttpClient
    ) {

    }

    public clearUserData() {
        localStorage.removeItem('user');
    }

    public saveUserData(data) {
        const dataToStorage = JSON.stringify(data);

        localStorage.setItem('user', dataToStorage);
    }

    public getUser() {
        this.userModel.load();

        const userString = this.userModel.get('user');

        if (userString) {
            const user = JSON.parse(userString);

            const userModel = new SingularResponse(
                UserResourceModel.query().getQuery(),
                null,
                UserResourceModel,
                user
            ).getData();

            return userModel;
        }
    }

    public getJWT() {
        this.userModel.load();

        return this.userModel.get('JWT');
    }
}
