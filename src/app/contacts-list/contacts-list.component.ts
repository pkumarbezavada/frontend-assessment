import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { AddContactService } from './../add-contact.service';
import { AngularFireDatabase} from '@angular/fire/database';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from './../data.service';
import { Observable, Subscription, of } from 'rxjs';
// import { AngularFireAuth } from '@angular/fire/auth';
// import { AngularFirestore } from '@angular/fire/firestore';
import { switchMap, first, map } from 'rxjs/operators';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';



@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css'],
  animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(-15px)' }),
            stagger(
              '50ms',
              animate(
                '550ms ease-out',
                style({ opacity: 1, transform: 'translateY(0px)' })
              )
            )
          ],
          { optional: true }
        ),
        query(':leave', animate('50ms', style({ opacity: 0 })), {
          optional: true
        })
      ])
    ])
  ]
})

export class ContactsListComponent implements OnInit{ 
  contactArray = [];
  showDeletedMessage: boolean;
  searchText: string = "";
  ngOnInit() {

    this.addContactService.getAll().subscribe(
      list => {
        this.contactArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });
    
    }

id;
contacts$;
contacts: any[];
Subscription: Subscription;
contact;
// contact= {};


  constructor(db: AngularFireDatabase, 
    private addContactService: AddContactService,
    private router: Router,
    private route: ActivatedRoute
    // private afAuth: AngularFireAuth,
    // private afs: AngularFirestore
  )
    
    {
// this.contacts$ = this.addContactService.getAll()
// .subscribe(contact => { this.contacts = contact; console.log(this.contacts)});

// db.list('/contacts').snapshotChanges()
// .subscribe(contacts => { this.contacts = contacts; console.log(this.contacts)});
// {
//   this.contacts$ = this.afAuth.authState.pipe(
//     switchMap(user => {
//       if (user) {
//         return this.afs.doc<any>(`users/${user.uid}`).valueChanges();
//       } else {
//         return of(null);
//       }
//     })
//   );
// }

  // this.id = db.list('/contacts').snapshotChanges()
  // .subscribe(contacts$ => { this.contacts = contacts$; console.log(this.contacts)});
  // if (this.id) {
  // this.addContactService.getContact(this.id).subscribe(p => this.contact = p);
  // console.log("this is the id" + this.id);



  // this.contacts$ = db.list('/contacts').snapshotChanges().pipe(map(actions => actions.map(a => {
  //   const data = a.payload.doc.data() as ;
  //   const id = a.payload.doc.id;
  //   console.log("this  is a" + a);
  // })));
  
//   // let id = this.route.snapshot.paramMap.get('$key');

//   // // if (id) this.addContactService.getContact(id).valueChanges().subscribe(p => this.contact = p);

 
  
}

    
// });

//  delete(db: AngularFireDatabase) {
//    if(!confirm('Are You Sure Want To Delete This Contact')) {return;}
// this.addContactService.delete(this.id);
// //  db.object('/contacts').valueChanges()
// //  .subscribe(contacts => { this.contact = contacts;
// //  });

// this.router.navigate(['/contacts']);

// }

/* To Avoid Memory Leaks when user naviagtes from this component*/
// ngOnDestroy() {

// this.subscription.unsubscribe();

// }

onDelete($key) {
  if (confirm('Are you sure to delete this record ?')) {
    this.addContactService.deleteContact($key);
    this.showDeletedMessage = true;
    setTimeout(() => this.showDeletedMessage = false, 3000);
  }
}




}

