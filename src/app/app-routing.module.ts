import { EditContactComponent } from './edit-contact/edit-contact.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { FavoriteContactsComponent } from './favorite-contacts/favorite-contacts.component';


const routes: Routes = [
  {
    path: '',
    component: ContactsListComponent
  },
  
  {
    path: 'addContact',
    component: AddContactComponent
  },
  {
    path: 'favoriteContact',
    component: FavoriteContactsComponent
  },
  {
    path: 'contacts/contact-details/:id',
    component: ContactDetailsComponent
    
      },
  {
    path: 'addContact/:id',
    component: AddContactComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
