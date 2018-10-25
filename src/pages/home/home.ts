import { AviciiPage } from './../avicii/avicii';
import { GarrixPage } from './../garrix/garrix';
import { ChainsPage } from './../chains/chains';
import { AlessoPage } from './../alesso/alesso';
import { KygoPage } from './../kygo/kygo';
import { Tracks5Page } from './../tracks5/tracks5';
import { Tracks4Page } from './../tracks4/tracks4';
import { Tracks3Page } from './../tracks3/tracks3';
import { Tracks2Page } from './../tracks2/tracks2';
import { Tracks1Page } from './../tracks1/tracks1';
import { Image5Page } from './../image5/image5';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ImagenKilPage } from '../imagen-kil/imagen-kil';
import { Imagen2Page } from '../imagen2/imagen2';
import { Imagen3Page } from '../imagen3/imagen3';
import { Imagen4Page } from '../imagen4/imagen4';
import { Reseña1Page } from '../reseña1/reseña1';
import { Reseña2Page } from '../reseña2/reseña2';
import { Reseña3Page } from '../reseña3/reseña3';
import { Reseña4Page } from '../reseña4/reseña4';
import { Reseña5Page } from '../reseña5/reseña5';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  imagen1= ImagenKilPage
  imagen2= Imagen2Page
  imagen3= Imagen3Page
  imagen4= Imagen4Page
  imagen5= Image5Page
  tracks1= Tracks1Page
  tracks2= Tracks2Page
  tracks3= Tracks3Page
  tracks4= Tracks4Page
  tracks5= Tracks5Page
  kygo= KygoPage
  alesso= AlessoPage
  chains= ChainsPage
  garrix= GarrixPage
  avicii= AviciiPage
  reseña1= Reseña1Page
  reseña2= Reseña2Page
  reseña3= Reseña3Page
  reseña4= Reseña4Page
  reseña5= Reseña5Page


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
  i5()
  {
    this.navCtrl.push(this.imagen5);
  }
  t1()
  {
    this.navCtrl.push(this.tracks1);
  }
  t2()
  {
    this.navCtrl.push(this.tracks2);
  }
  t3()
  {
    this.navCtrl.push(this.tracks3);
  }
  t4()
  {
    this.navCtrl.push(this.tracks4);
  }
  t5()
  {
    this.navCtrl.push(this.tracks5);
  }
  b1()
  {
    this.navCtrl.push(this.kygo);
  }
  b2()
  {
    this.navCtrl.push(this.alesso);
  }
  b3()
  {
    this.navCtrl.push(this.chains);
  }
  b4()
  {
    this.navCtrl.push(this.garrix);
  }
  b5()
  {
    this.navCtrl.push(this.avicii);
  }
  r1()
  {
    this.navCtrl.push(this.reseña1);
  }
  r2()
  {
    this.navCtrl.push(this.reseña2);
  }
  r3()
  {
    this.navCtrl.push(this.reseña3);
  }
  r4()
  {
    this.navCtrl.push(this.reseña4);
  }
  r5()
  {
    this.navCtrl.push(this.reseña5);
  }


  

}
