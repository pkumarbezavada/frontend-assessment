import { AddContactService } from './add-contact.service';
import { environment } from './../environments/environment';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { FavoriteContactsComponent } from './favorite-contacts/favorite-contacts.component';
import { AppRoutingModule } from './/app-routing.module';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AngularFireModule} from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireList } from '@angular/fire/database';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { AngularFireAuth } from '@angular/fire/auth';
// import { AngularFirestore } from '@angular/fire/firestore';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ContactsListComponent,
    AddContactComponent,
    FavoriteContactsComponent,
    ContactDetailsComponent,
    EditContactComponent
    // AngularFireAuth
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule, 
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserAnimationsModule
    ],
  providers: [AddContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
