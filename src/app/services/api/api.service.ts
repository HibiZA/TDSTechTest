import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { Observable } from 'rxjs';
import { Result,  Args, ChosenArgs, ChosenResult} from './Response';



@Injectable({
  providedIn: 'root'
})


export class ApiService {

  baseUrl = 'https://postman-echo.com/';
  //defualtData: Observable<Data[]>;
  defualtData: Args[] = [];
  chosenData: ChosenArgs[] = [];
  data: Args;
  defaultDataSource: MatTableDataSource<Args> = null;
  chosenDataSource: MatTableDataSource<ChosenArgs> = null;
  presentData: boolean = false;
  presentDefaultData: boolean = false;

  constructor(private http: HttpClient) { }

 getApiDefault(){
  this.defualtData = [];
  this.http.get<Result>(this.baseUrl+'get?foo1=bar1&foo2=bar2').subscribe((res: Result)=>{

    this.defualtData.push(res.args);
    this.defaultDataSource = new MatTableDataSource(this.defualtData);
    this.presentDefaultData = true;
    console.log(this.defualtData);
  });

 }

 getApiChosenData(Name: string, Surname: string){
   this.chosenData = [];
   this.http.get<ChosenResult>(this.baseUrl+`get?Name=${Name}&Surname=${Surname}`).subscribe((res: ChosenResult)=>{
     this.chosenData.push(res.args);
     this.chosenDataSource = new MatTableDataSource(this.chosenData);
     this.presentData = true;
   });
 }

 
}
