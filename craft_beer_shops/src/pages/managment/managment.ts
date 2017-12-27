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
  @ViewChild('f') form: NgForm;
  
  name: string = '';
  phone: string = '';
  city: string = '';
  postal: string = '';
  street: string = '';
  building: number;
  photo: string = '';
  
  constructor(private modalController: ModalController,
              public managmentService: ManagmentService) {
  }

  ionViewDidEnter(): void {
    this.editMode = this.managmentService.hasShop();
    const shop = this.managmentService.getShop();
    this.name = shop.name;
    this.phone = shop.phoneNumber;
    this.city = 'Lodz';
    this.postal = shop.postalAddress;
    this.street = shop.street;
    this.building = shop.buildingNumber;
    this.photo = shop.photo;
  }

  onSubmit(name: string, phone: string, city: string, postal: string, street: string, building: number, photo: string) {
    this.managmentService.setShopValues(this.name, this.phone, this.city, this.postal, this.street, this.building, this.photo);
  }

  onDelete(beer: Beer): void {
    this.managmentService.removeBeer(beer);
  }

  onEdit(beer: Beer) {
    //editable beer name
    const beerName = beer.name;
    let modal = this.modalController.create(ManageBeerPage, {
      beer: beer, mode: 'Edit'});
    modal.onDidDismiss((data)=>{
      //data will be a nullable value if a user will click on the close button
      //otherwise returns format data {beer: xyz, mode: 'zxc'}
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
}
