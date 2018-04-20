import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RestProvider} from "../../providers/rest/rest";
import {Product} from "../../models/product";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  productsObservable:Observable<Product[]>;

  constructor(public navCtrl: NavController, private restProvider:RestProvider) {

  }

  ionViewDidLoad(){
    this.productsObservable= this.restProvider.getProducts();
  }

  navToDetail(product:Product){this.navCtrl.push("ProductPage", {"product": product});}



}
