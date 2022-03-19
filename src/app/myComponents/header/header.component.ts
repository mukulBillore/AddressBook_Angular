import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private router:Router) { 

  }

  ngOnInit(): void {
  }
onClickNavigateToHome(){ 
  this.router.navigate(["home"]);
}

onClickNavigateToForm(){ 
  this.router.navigate(["signup"]);
}

onClickNavigateToInfo(){ 
  this.router.navigate(["info"]);
}

}
