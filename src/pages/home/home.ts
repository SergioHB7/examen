import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ImagenKilPage } from '../imagen-kil/imagen-kil';
import { Imagen2Page } from '../imagen2/imagen2';
import { Imagen3Page } from '../imagen3/imagen3';
import { Imagen4Page } from '../imagen4/imagen4';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  imagen1= ImagenKilPage
  imagen2= Imagen2Page
  imagen3= Imagen3Page
  imagen4= Imagen4Page

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
  i3()
  {
    this.navCtrl.push(this.imagen3);
  }
  i4()
  {
    this.navCtrl.push(this.imagen4);
  }

}
