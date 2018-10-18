import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ImagenKilPage } from '../imagen-kil/imagen-kil';
import { Imagen2Page } from '../imagen2/imagen2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  imagen1= ImagenKilPage
  imagen2= Imagen2Page

  constructor(public navCtrl: NavController) {

  }
  i1()
  {
    this.navCtrl.push(this.imagen1);
  }

  i2()
  {
    this.navCtrl.push(this.imagen2);
  }

}
