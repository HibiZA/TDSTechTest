import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  baseUrl: string = 'https://precise-plane-303511.ew.r.appspot.com/';
  highestDepartmentSalary: any;
  queryData: any;

  constructor(private http: HttpClient) { }


  getQueryData(queryString: string){

    let body = {
      query: queryString
    }

    this.http.post(this.baseUrl+'query', body).subscribe((res)=>{
      this.queryData = JSON.stringify(res);
      console.log(res);
    });

  }

  getHighestDepartmentSalary(){
      this.http.get(this.baseUrl+'query/viewHighestDepartmentSalary').subscribe((res: any)=>{
        this.queryData = JSON.stringify(res[0]);
        console.log(res);

      })
  }
}
