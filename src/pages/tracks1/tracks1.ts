import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Tracks1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tracks1',
  templateUrl: 'tracks1.html',
})
export class Tracks1Page {

  tracks1=["1. Never Let You Go (feat. John Newman","2. Sunrise (feat. Jason Walker)","3. Riding Shotgun (feat. Bonnie Mckee)","4. Stranger Things (with OneRepublic)" ,"5. With You (feat. Wrabel)","6. Permanent (feat. JHart)","7. Kids In Love (feat. The Night Game","8. I See You (feat. Billy Raffoul)","9. Remind Me To Forget (feat. Miguel)"]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tracks1Page');
  }

}
