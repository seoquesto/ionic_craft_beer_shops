import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { Loading } from 'ionic-angular';
import { Injectable } from '@angular/core';

@Injectable()
export class LoadingService {
    private loading: Loading;

    constructor (private loadingController: LoadingController) { }

    public createLoadingTile(loadingMessage: string): void {
        this.loading = this.loadingController.create({
            content: loadingMessage
        });
        this.loading.present();
    }
    
    public hideLoadingTile(): void {
        this.loading.dismiss();
        this.loading = null;
    }
}