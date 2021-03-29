import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
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

    public getJWT() {
        this.userModel.load();

        return this.userModel.get('JWT');
    }
}
