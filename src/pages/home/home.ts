import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { GroceriesPage } from '../groceries/groceries';
import { ContactsPage } from '../contacts/contacts';
import { NotesPage } from '../notes/notes';
import { LadderPage } from '../ladder/ladder';
import { SegmentPage } from '../segment/segment';
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tab1Root = GroceriesPage;
  tab2Root = NotesPage;
  tab3Root = ContactsPage;
  tab4Root = LadderPage;
  tab5Root = SegmentPage;
  constructor(public navCtrl: NavController) {

  }
}
