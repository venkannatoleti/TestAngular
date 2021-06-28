import { Injectable } from '@angular/core';
// import { HttpClient } from 'selenium-webdriver/http';
import { Student } from './Models/Student';
import { from, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  type:string = 'table';
  
//  URL:string = "https://run.mocky.io/v3/2b452bc9-7666-4152-a17c-6cbe70136dec";
 URL = "http://localhost:63566/api/rocksand/get";
  constructor(private http:HttpClient) {  }
  GetDataFromService()
  {
    let header = new HttpHeaders().set("Content-Type", "application/json");
   return this.http.get(this.URL,{headers: header} );
  }
  Get():Observable<Student[]> {
    let list: Student[] = [];
    list.push({ Id: 1, Name: "venky", phone: "1234" });
    list.push({ Id: 2, Name: "sarvesh", phone: "5678" });
    list.push({ Id: 3, Name: "chandu", phone: "9101" });
    list.push({ Id: 4, Name: "bobby", phone: "11213" });
    return of(list);

  }

  DeleteAllData()
  {
    return true;
  }
}
