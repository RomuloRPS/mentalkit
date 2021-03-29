import { Injectable } from '@angular/core';
import { CodePush, InstallMode } from '@ionic-native/code-push/ngx';

@Injectable({
    providedIn: 'root'
})
export class CodePushCheckerService {
    private updating = false;

    public constructor(
      private codePush: CodePush,
    ) {

    }

    public setUpdate(option) {
        this.updating = option;
    }

    public checkCodePush() {
        if (!this.updating) {
            this.codePush.sync({
                updateDialog: false,
                mandatoryInstallMode: InstallMode.IMMEDIATE,
                installMode: InstallMode.IMMEDIATE
            }).subscribe(
                async (data) => {
                    if (data != 0 && data != 5) {
                        this.setUpdate(true);
                    }

                    if (data === 0) {
                        this.setUpdate(false);
                    }

                    console.log('CODE PUSH SUCCESSFUL: ' + data);
                },
                async (err) => {
                    this.setUpdate(false);
                    console.log('CODE PUSH ERROR: ' + err);
                }
            );
        }
    }
}
