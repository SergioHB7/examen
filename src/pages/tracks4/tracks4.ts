import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Tracks4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tracks4',
  templateUrl: 'tracks4.html',
})
export class Tracks4Page {

  tracks4=[ "1. Gold Skies (with Sander van Doorn, DVBBS & Alessia)","2. Animals","3. Proxy","4. Tremor (with Dimitri Vegas & Like Mike)","5. Wizard (with Jay Hardway)"]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tracks4Page');
  }

}
