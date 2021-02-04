import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-api-endpoint',
  templateUrl: './api-endpoint.component.html',
  styleUrls: ['./api-endpoint.component.css']
})
export class APIEndpointComponent implements OnInit {

  name: string = "foo1";
  constructor(public ApiService: ApiService) { }

  ngOnInit(): void {
    
  }
 data = this.ApiService.defualtData;
 displayColumns: string[] = ['foo1', 'foo2'];

}
