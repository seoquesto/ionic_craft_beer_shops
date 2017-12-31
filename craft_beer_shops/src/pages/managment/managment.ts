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

  onSubmit() {
    this.managmentService.setShopValues(this.name, this.phone, this.city, this.postal, this.street, this.building, this.photo);
  }

  async changePhotoFile(event: any) {
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

  onEdit(beer: Beer) {
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

  onAdd() {
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

  private presentSpinner(){
    this.showSpinner = true;
    //this.spinnerTimeout();
  }

  private spinnerTimeout() {
    setTimeout(()=>{
      if(this.showSpinner){
        this.hideSpinner();
        let toast = this.toastController.create({
          message:'Something went wrong during loading!',
          duration: 2000,
          position: 'bottom'
        });
        toast.present();
      }
    },10000);
  }

  private hideSpinner() {
    this.showSpinner = false;
  }
}
