import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Tracks2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tracks2',
  templateUrl: 'tracks2.html',
})
export class Tracks2Page {
  tracks2=[ "1. Profondo","2. PAYDAY","3. Heroes (feat. ToveLo)"," 4. Tear The Roof Up","5. Cool (feat. Roy English)", "6. Scars (feat. Ryan Tedder)","7. Sweet Escape (feat. Sirena)","8. Destinations", "9. If It Wasn´t For You","10. Under Control (with Calvin Harris & Hurts)" ,"12. If I Lose Myself (with OneRepublic)","13. Immortale"]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tracks2Page');
  }

}
