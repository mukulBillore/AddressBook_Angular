import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressBookService } from 'src/app/address-book.service';
// import { AddressBookService } from 'src/app/address-book.service';
import { AddressBookModel } from 'src/app/Model/address-book-model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  addressbook: AddressBookModel = new AddressBookModel("", "", "", 0, "", "", "");

  // ,private service:AddressBookServiceService
  constructor(private router: Router, private route: ActivatedRoute,private addressBookservice:AddressBookService) { }

  // Getting id from routes snapshot using paramMap for doing update operation,
  // i,e from the path of the method
  IdForUpdate: any = this.route.snapshot.paramMap.get("Id");

  ngOnInit(): void {
    console.log(this.IdForUpdate);
  this.addressBookservice.findById(this.IdForUpdate).subscribe((getData:any)=> 
    { 
      console.log(getData);
      this.addressbook=getData.data;
    });
  }

  // On hitting the cancel butten it redirects to the home component
  onCancel() {
    this.router.navigate(["home"]);
  }

  // save the data on click the submit buttom
  addEmployeeDataOnSubmit() {
     this.addressBookservice.insert(this.addressbook).subscribe((getData: any) => {
       console.log(getData);
       })
    this.router.navigate(["home"]);
  }

  // Update the data into the repository
  updateEmployeeDataOnUpdate() {
     this.addressBookservice.update(this.IdForUpdate,this.addressbook).subscribe(data =>{
     console.log(data);
      console.log("updated sucuessfully");
     });
    this.router.navigate(["home"]);
  }

  // Navigate to dashboard from signup component
  onDashboard() {
    this.router.navigate(["home"]);
  }

}
