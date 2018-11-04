import { AddContactService } from './../add-contact.service';
import { FormsModule, NgForm, FormGroup } from '@angular/forms';
import { Component, OnInit, NgModule, Output } from '@angular/core';
import { DataService } from '../data.service';
import { AngularFireDatabase} from '@angular/fire/database';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  ngOnInit() {
this.addContactService.getAll();
   
  }
contact= {};
contacts$;
contacts: any[];
  // log(x) { console.log(x);}


  constructor(db: AngularFireDatabase, 
    private addContactService: AddContactService,
    private router: Router,
    private route: ActivatedRoute) {}
     
submitted: boolean;
formControls =  this.addContactService.form.controls;
showSuccessMessage: boolean;
// addContact: NgForm
  onSubmit() {
    this.submitted = true;
    if (this.addContactService.form.valid) {
      if (this.addContactService.form.get('$key').value == null){
        this.addContactService.createContact(this.addContactService.form.value);
        console.log("this is the value" + this.addContactService.form.value );
        this.router.navigate(['']);}
      else
        this.addContactService.updateContact(this.addContactService.form.value);
      this.showSuccessMessage = true;
      setTimeout(() => this.showSuccessMessage = false, 3000);
      this.submitted = false;
      this.addContactService.form.reset();
      this.router.navigate(['']);
      //this is to be done for proper reset operation
      this.addContactService.form.setValue({
        $key: null,
        contactName:" ",
        email:" ",
        phone:" ",
        city:" ",
        state:" ",
        zip:" ",
        address:" ",
        address2:" ",
        ImageUrl:" "
      });
    }
  }

}
// this.addContactService.create(addContact);
// this.router.navigate(['']);



// // console.log("this is adding a contact" + addContact);
// // alert("added sucessfully");
// // console.log("hello contacts" +' ' + addContact);


  

  

  

  // clearForm(addContactForm: NgForm){
  //   addContactForm.reset();

  // }


  

 

