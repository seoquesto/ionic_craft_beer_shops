import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { ManagmentService } from './../../services/managment.service';
import { ManageBeerPage } from './../manage-beer/manage-beer';
import { Beer } from './../../models/beer.model';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'page-managment',
  templateUrl: 'managment.html',
})

export class ManagmentPage {
  segment: string = 'Shop';
  editMode: boolean = false;
  showSpinner: boolean = false;
  private submitedPage:boolean[] = [false,false];
  
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
              private toastController: ToastController) {
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
  }

  onSubmit(): void {
    if(this.segment=='Shop') {
      this.submitedPage[0] = true;
      if(!this.submitedPage[1]) {
        this.segment = 'Beers';
        return;
      }
    } else if(this.segment == 'Beers') {
      this.submitedPage[1] = true;
      if(!this.submitedPage[0]) {
        this.segment = 'Shop';
        return;
      }
    }

    if(!this.submitedPage[0] || !this.submitedPage[1]) {
      return;
    }

    this.managmentService.setShopValues(this.name, this.phone, this.city, this.postal, this.street, this.building, this.photo);
    let toast = this.toastController.create({message:'Uploaded!', duration:1200});
    toast.present();
  }

  async changePhotoFile(event: any): Promise<void> {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
      let file: File = fileList[0];
      this.presentSpinner();
      await this.managmentService.setPhotoFile(file).then((data:string)=>{
        this.photo = data;
        this.hideSpinner();
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

  private presentSpinner(): void{
    this.showSpinner = true;
  }

  private hideSpinner(): void {
    this.showSpinner = false;
  }
}
