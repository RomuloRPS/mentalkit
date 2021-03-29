import { Injectable } from '@angular/core';
import { PluralResponse, SingularResponse } from 'coloquent';

import { UserResourceModel } from 'src/app/coloquent-model/user/user.model';
import { UserModel } from 'src/app/models/user.model';

@Injectable({
    providedIn: 'root'
})
export class RoleService {
    public roles = [];

    public constructor(
      private userModel: UserModel
    ) { }

    public setRoles(roles) {
        this.roles = roles;
    }

    public getRoles() {
        return this.roles;
    }

    public updateRoles() {
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

            const parsedRoles = this.parseRoles(userModel);

            this.setRoles(parsedRoles);
        }
    }

    private parseRoles(user) {
        return user.getRelation('roles');
    }
}
