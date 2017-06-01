import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, reorderArray } from 'ionic-angular';

/**
 * Generated class for the LadderPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-ladder',
  templateUrl: 'ladder.html',
})
export class LadderPage {
  ladder: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ladder = [
      'Adelaide',
      'Collingwood',
      'Essendon',
      'Hawthorn',
      'Carlton',
      'Sydney',
      'Western Bulldogs',
      'West Coast',
      'Fremantle',
      'North Melbourne',
      'Richmond',
      'Greater Western Sydney',
      'St Kilda',
      'Geelong',
      'Brisbane',
      'Melbourne',
      'Port Adelaide',
      'Gold Coast'
    ];

  }

  reorderItems(indexes) {
    this.ladder = reorderArray(this.ladder, indexes);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LadderPage');
  }

}
