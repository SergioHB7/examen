import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Tracks3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tracks3',
  templateUrl: 'tracks3.html',
})
export class Tracks3Page {

  tracks3=[ "1. The One", "2. Break Up Every Night", "3. Bloodstream", "4. Don´t Say (feat. Emily Warren)", "5. Something Just Like This (with Coldplay)”, “6. My Type (feat. Emily Warren)", "7. It Won´t Kill Ya", "8. Paris", "9. Honest","10. Wake Up Alone (feat. Jhene Aiko)", "11. Young", "12. Last Day Alive (feat. Florida Georgia Line)"]
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tracks3Page');
  }

}
