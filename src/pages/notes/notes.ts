import { PostDataServiceProvider } from './../../providers/post-data-service/post-data-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';

/**
 * Generated class for the NotesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html',
})
export class NotesPage {
  notes: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,private postService:PostDataServiceProvider) {


  }
  addNote() {
    let prompt = this.alertCtrl.create({
      title: 'Birthday',
      message: "Add The Birthday",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name',

        },
        {
          name: 'date',
          placeholder: 'Date',

        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.notes.push(data);
           
   
            this.postService.postData(data).subscribe((data)=>{
              console.log(data);
            })
          }
        }
      ]
    });
    prompt.present();
  }
  editNote(note) {

    let prompt = this.alertCtrl.create({
      title: 'Edit Birthday',
      inputs: [{
        name: 'name',
        placeholder: 'Name',
        value: note.name

      },
        {
          name: 'date',
          placeholder: 'Date',
          value: note.date

        }],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: data => {
            let index = this.notes.indexOf(note);

            if (index > -1) {
              this.notes[index] = data;
            }
          }
        }
      ]
    });

    prompt.present();

  }

  deleteNote(note) {

    let index = this.notes.indexOf(note);

    if (index > -1) {
      this.notes.splice(index, 1);
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad NotesPage');
  }

}
