import { BeerComment } from './../../models/beer-comment.model';
import { NgForm } from '@angular/forms';
import { Beer } from './../../models/beer.model';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-manage-beer',
  templateUrl: 'manage-beer.html',
})

export class ManageBeerPage implements OnInit {
  @ViewChild('f') form: NgForm;
  beer: Beer;
  mode: string = 'Edit';
  
  constructor(private navParams: NavParams,
              private viewController: ViewController) { }
  
  ngOnInit(): void {
    this.beer = this.navParams.get('beer');
    this.mode = this.navParams.get('mode');
  }

  ionViewDidEnter() {
    this.form.form.patchValue({
      name: this.beer.name,
      price: this.beer.price,
      photo: this.beer.photo,
      percentages: this.beer.percentages,
      ibu: this.beer.ibu,
      plato: this.beer.plato
    });
  }

  onSubmit(): void {
    this.viewController.dismiss({beer: this.prepareBeerToCallback()});
  }

  onClose(): void {
    this.viewController.dismiss();
  }

  prepareBeerToCallback(): Beer {
    let comments: BeerComment[] = [];
    
    if(this.beer.comments != null) {
      this.beer.comments.forEach(e=>comments.push(e));
    }
    return new Beer(this.form.form.get('name').value,
                    this.form.form.get('price').value,
                    this.form.form.get('photo').value,
                    this.form.form.get('percentages').value,
                    this.form.form.get('ibu').value,
                    this.form.form.get('plato').value,
                    comments);
  }
}
