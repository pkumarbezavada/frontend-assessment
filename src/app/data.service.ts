import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService{

  constructor(private http: HttpClient) { }

getUsers(){

return this.http.get('https://jsonplaceholder.typicode.com/users')

}

getUser(contactId){

  return this.http.get('https://jsonplaceholder.typicode.com/users/'+contactId)
  
  }

  getPosts() {

    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }


}
