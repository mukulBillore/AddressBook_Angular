import { Injectable } from '@angular/core';
import { AddressBookModel } from './Model/address-book-model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AddressBookService {

  // injected HttpClient to perform Http request
  constructor(private http: HttpClient) { }

  /**
* Purpose: this method is used to request the POST http method.
* it save the employee data in the database.
* beacuse we used customize port thats we provide localhost 9191 instead of 8080
* @returns the repsonse message of the POST method
*/
  welcomeMessage(){
    return this.http.get("http://localhost:8080/");
    
  }
  insert(addressBookModel: AddressBookModel) {
    return this.http.post("http://localhost:8080/save", addressBookModel);
  }

  findAll() {
    return this.http.get("http://localhost:8080/findAll");
  }

  delete(Id: number) {
    return this.http.delete("http://localhost:8080/delete/" + Id);

  }
  findById(Id: Number) {
    return this.http.get("http://localhost:8080/findById/" + Id);
  }

update(Id:number,addressBookModel:any){
  return this.http.put("http://localhost:8080/update/" + Id,addressBookModel);
}
}
