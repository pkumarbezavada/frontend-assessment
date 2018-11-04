import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class AddContactService {

  constructor(private db: AngularFireDatabase) { }
  contactsList: AngularFireList<any>;


  form = new FormGroup({
    $key: new FormControl(null),
    contactName: new FormControl('', Validators.required),
    phone: new FormControl('', [Validators.required, Validators.minLength(10)]),
    email: new FormControl('', Validators.email),
    address: new FormControl(''),
    address2: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    zip: new FormControl(''),
    ImageUrl: new FormControl('')
  });


  getAll() {

this.contactsList = this.db.list('contacts');
return this.contactsList.snapshotChanges();

  }

  createContact(contact) {
this.contactsList.push({
  contactName: contact.contactName,
  email: contact.email,
  phone: contact.phone,
  city: contact.city,
  state: contact.state,
  zip:contact.zip,
  ImageUrl: contact.ImageUrl,
  address: contact.address,
  address2: contact.address2
});
}
  updateContact(contact) {
    this.contactsList.update(contact.$key,
      {
        contactName: contact.contactName,
        email: contact.email,
        phone: contact.phone,
        city: contact.city,
        zip: contact.zip,
        state: contact.state,
        address:contact.address,
        address2:contact.address2,
        ImageUrl:contact.ImageUrl
      });
      
  }

  deleteContact($key: string) {
    this.contactsList.remove($key);
  }
  populateForm(contact) {
    this.form.setValue(contact);
  }

// create(contact){

//   this.db.list('/contacts').push(contact);
//   // console.log("this contact namke" + contact.contactName);
// }
// getAll(){

// return this.db.list('/contacts').snapshotChanges();


// }
// delete(contactId){

//   return this.db.object('/contacts' + contactId).remove();
// }


getContact(contactId) {

  return this.db.object('contacts/' +contactId).snapshotChanges();
}

}
