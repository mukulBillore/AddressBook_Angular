import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddressBookService } from 'src/app/address-book.service';
import { AddressBookModel } from 'src/app/Model/address-book-model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})



export class HomepageComponent implements OnInit {
// private service: AddressBookService
  constructor(private router: Router,  private service: AddressBookService) { }

  title: string = "AddressBook Application";
  
  addressbookList: any;
  ngOnInit(): void {
       this.service.findAll().subscribe(data => {
       console.log(data);
       this.addressbookList=data;
     }
      )  
  }

  onClickAddUserGoToSignUpPage() {
    this.router.navigate(["signup"]);
  }


  deleteAddressRecord(Id: number) {
    this.service.delete(Id).subscribe(data => {console.log(data);
 });
 window.location.reload();
  //this.router.navigate(["home"]);
  }


  editAddressRecord(Id: number) {
  //  this.service.update(Id,this.addressbookList).subscribe(data => {console.log(data);
  // });

    this.router.navigate(["update",Id]);
  
  }



}
