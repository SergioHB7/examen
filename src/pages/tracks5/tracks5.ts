import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Tracks5Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tracks5',
  templateUrl: 'tracks5.html',
})
export class Tracks5Page {

  tracks5=["1. Wake Me Up", "2. You Make Me","3. Hey Brother", "4. Addicted To You", "5. Dear Boy","6. Liar Liar","7. Shame On Me","8. Lay Me Down","9. Hope There´s Someone", "10. Heart Upon My Sleeve","11. Canyons", "12. All You Need Is Love"]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tracks5Page');
  }

}
