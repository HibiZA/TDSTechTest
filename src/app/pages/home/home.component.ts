import { Component, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  toApiEndpoint: boolean = false;
  toDatabase: boolean = false;
  toHome: boolean = true;
  drawer:  MatDrawer;

  constructor(private ApiService: ApiService) { }

  ngOnInit(): void {
  }

  navToApiEndpoint(){
    this.toApiEndpoint = true;
    this.toDatabase = false;
    this.toHome = false;
    
  }
  navToDatabase(){
    this.toDatabase = true;
    this.toApiEndpoint = false;
    this.toHome = false;

  }
  navToHome(){
    this.toApiEndpoint = false;
    this.toDatabase = false;
    this.toHome = true;
  }

}
