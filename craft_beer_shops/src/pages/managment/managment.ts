import { Location } from './../../models/location.model';
import { LoadingService } from './../../services/loading.service';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { ManagmentService } from './../../services/managment.service';
import { ManageBeerPage } from './../manage-beer/manage-beer';
import { Beer } from './../../models/beer.model';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SetLocationPage } from '../set-location/set-location';

@Component({
  selector: 'page-managment',
  templateUrl: 'managment.html',
})

export class ManagmentPage {
  segment: string = 'Shop';
  editMode: boolean = false;
  showSpinner: boolean = false;
  private submitedPage: boolean[] = [false,false,false];
  location: Location;
  
  @ViewChild('f') form: NgForm;
  
  name: string = '';
  phone: string = '';
  city: string = '';
  postal: string = '';
  street: string = '';
  building: number;
  photo: string = '';

  cities:string[] = [];

  constructor(private modalController: ModalController,
              public managmentService: ManagmentService,
              private toastController: ToastController,
              private loadingService: LoadingService) {
  }

  ionViewDidEnter(): void {
    this.cities = this.managmentService.getCities();
    this.editMode = this.managmentService.hasShop();
    const shop = this.managmentService.getShop();
    this.name = shop.name;
    this.phone = shop.phoneNumber;
    this.city = this.managmentService.getCity();
    this.postal = shop.postalAddress;
    this.street = shop.street;
    this.building = shop.buildingNumber;
    this.photo = shop.photo;

    this.location = this.managmentService.getShopLocation();
  }

  onSubmit(): void {
    if(this.segment=='Shop') {
      this.submitedPage[0] = true;
      if(!this.submitedPage[1]) {
        this.segment = 'Beers';
        return;
      }
      if(!this.submitedPage[2]) {
        this.segment = 'Location';
        return;
      }
    } else if(this.segment == 'Beers') {
      this.submitedPage[1] = true;
      if(!this.submitedPage[0]) {
        this.segment = 'Shop';
        return;
      } 
      if(!this.submitedPage[2]) {
        this.segment = 'Location';
        return;
      }
    } else if(this.segment == 'Location') {
      this.submitedPage[2] = true;
      if(!this.submitedPage[0]) {
        this.segment = 'Shop';
        return;
      }
      if(!this.submitedPage[1]) {
        this.segment = 'Beers';
        return;
      }
    }

    if(!this.submitedPage[0] || !this.submitedPage[1] || !this.submitedPage[2]) {
      return;
    }

    if(this.location == null) {
      this.segment = 'Location';
      this.toastController.create({message: 'Plese select location!.', duration:1500, showCloseButton: true}).present();

      return;
    }

    this.managmentService.setShopValues(this.name, this.phone, this.city, this.postal, this.street, this.building, this.photo, this.location);
    let toast = this.toastController.create({message:'Uploaded!', duration:1200});
    toast.present();
  }

  onOpenMap(): void {
    let modal = this.modalController.create(SetLocationPage, {
      lat: this.location==null ? 0 : this.location.lat, 
      lng: this.location==null ? 0 : this.location.lng, 
      hasAlreadyLocation: this.location != null } );

    modal.onDidDismiss((data)=>{
      if(data==null) 
        return;
      this.location = new Location(data.location.lat, data.location.lng);
    });
    modal.present();
  }

  async changePhotoFile(event: any): Promise<void> {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
      let file: File = fileList[0];
      this.loadingService.createLoadingTile('Uploading photo..');
      this.showSpinner = true;
      await this.managmentService.setPhotoFile(file).then((data:string)=>{
        this.photo = data;
        this.loadingService.hideLoadingTile();        
        this.showSpinner = false;
      });
    }
  }

  onDelete(beer: Beer): void {
    this.managmentService.removeBeer(beer);
  }

  onEdit(beer: Beer): void {
    const beerName = beer.name;
    let modal = this.modalController.create(ManageBeerPage, {
      beer: beer, mode: 'Edit'});
    modal.onDidDismiss((data)=>{
      if(data==null) 
        return;
      this.managmentService.editBeer(beerName,
                                    data.beer.name,
                                    data.beer.price,
                                    data.beer.photo,
                                    data.beer.percentages,
                                    data.beer.ibu,
                                    data.beer.plato);
    });
    modal.present();
  }

  onAdd(): void {
    let beer = new Beer('',null,'',null,null,null,[]);
    let modal = this.modalController.create(ManageBeerPage, {
      beer: beer, mode: 'Add'});
    modal.onDidDismiss((data)=>{
      if(data==null) 
        return;
      this.managmentService.addBeer(data.beer.name,
                                    data.beer.price,
                                    data.beer.photo,
                                    data.beer.percentages,
                                    data.beer.ibu,
                                    data.beer.plato);
    });
    modal.present();
  }
}
