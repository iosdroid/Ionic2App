import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http'
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GroceriesPage } from '../pages/groceries/groceries';
import { ContactsPage } from '../pages/contacts/contacts';
import { NotesPage } from '../pages/notes/notes';
import { LadderPage } from '../pages/ladder/ladder';
import { SegmentPage } from '../pages/segment/segment';
import { PostDataServiceProvider } from '../providers/post-data-service/post-data-service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GroceriesPage,
    ContactsPage,
    NotesPage,
    LadderPage,
    SegmentPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GroceriesPage,
    ContactsPage,
    NotesPage,
    LadderPage,
    SegmentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    PostDataServiceProvider
  ]
})
export class AppModule { }
