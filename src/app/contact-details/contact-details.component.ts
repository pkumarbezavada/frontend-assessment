import { FormsModule, NgForm, FormGroup } from '@angular/forms';
import { AddContactService } from './../add-contact.service';
import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
import { observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireDatabase} from '@angular/fire/database';




@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit{
  
 
  contacts$: object;
  contactName;
contact;

  constructor(private addContactService: AddContactService, private route: ActivatedRoute, 
    private router: Router, db: AngularFireDatabase,) { 


      this.route.params.subscribe( params => this.contact = params.id );

      // // db.list('/contacts').snapshotChanges()
      // // .subscribe(contact => { this.contacts = contact});
      // let uid = this.route.snapshot.paramMap.get('id');
      
  
      // if (uid) 
      // {
      //   console.log("entered this function");
      // this.addContactService.getContact(uid).subscribe(contact => {this.contact = contact});
      // console.log("this is id "+ uid);

      // }

 }
;
ngOnInit() {
  this.addContactService.getContact(this.contact).subscribe(
    addContactService => this.contact = addContactService 

  );}

  }

//   ngOnInit() {

//     // console.log("Hello World" + this.contact);

//     // this.data.getContact(this.contacts.id).valueChanges().subscribe(
//     //   data => this.contacts = data)
    

//   }

// }
