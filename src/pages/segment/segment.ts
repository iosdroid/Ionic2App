import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

/**
 * Generated class for the SegmentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-segment',
  templateUrl: 'segment.html',
})
export class SegmentPage {
  @ViewChild('mySlider') slider: Slides;
  selectedSegment: string;
  slides: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.slides = [
      {
        id: "first",
        title: "First Slide"
      },
      {
        id: "second",
        title: "Second Slide"
      },
      {
        id: "third",
        title: "Third Slide"
      }
    ];
  }

  onSegmentChanged(segmentButton) {
    console.log("Segment changed to", segmentButton.value);
    const selectedIndex = this.slides.findIndex((slide) => {
      return slide.id === segmentButton.value;
    });
    this.slider.slideTo(selectedIndex);
  }

  onSlideChanged(slider) {
    console.log('Slide changed');
    if (this.slider.getActiveIndex() < this.slides.length) {
      const currentSlide = this.slides[this.slider.getActiveIndex()];
      this.selectedSegment = currentSlide.id;
    }


  }
  ionViewDidLoad() {
    this.selectedSegment = 'first';
    console.log('ionViewDidLoad SegmentPage');
  }

}
