import { Component, OnInit } from '@angular/core';
import { APIService } from './api.service';
import { Student } from './Models/Student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  type: string = 'table';
  Students: Student[] = [];
  StudentDetails: Student;
  Name = 'Data Transfer to another component using input Decarator'
  DataCount: number[] = [10, 20, 30];
  pageLength = 10;
  pageCount = 0;
  NoofPages: number;
  PageNumber: number = 1;
  startIndex = 1;
  AllSelected:boolean = false;

  TempStudents: Student[] = [];
  constructor(private api: APIService) {

  }
  ngOnInit() {
    debugger
    localStorage.setItem('type', this.type);
    this.getTableDataFromService();

    // isPagerefresh
    // this.type = localStorage.getItem('type');

  }
  getTableDataFromService()
  {
    this.api.GetDataFromService().subscribe((response: Student[]) => {
      debugger
      this.NoofPages = Math.ceil(response.length / 10);
      this.Students = response;
      this.TempStudents = this.Students.slice(this.startIndex - 1, 10);;
    }, error => {
      console.log(error)
    });
  }
  counter(i: number) {
    return new Array(i);
  }
  fncChange(item: number = 0) {
    if (item > 0) {
      this.startIndex = item;
      this.PageNumber = item;
    }
    else
    {
      this.startIndex = 1;
      this.PageNumber = 1;
    }
    let to = this.pageLength + this.PageNumber;
    let from = this.pageLength * (this.startIndex - 1);
    this.TempStudents = this.Students.slice(from, this.pageLength * this.PageNumber);
    this.NoofPages = Math.ceil(this.Students.length /this.pageLength);
    
  }
  checkUncheckAll() {
    for (var i = 0; i < this.Students.length; i++) {
      this.Students[i].isCheck = this.AllSelected;
    }

  
  }

  DeleteAll()
  {
    debugger
    if (this.AllSelected)
    {
    var issuccess = this.api.DeleteAllData();
    if(issuccess)
    this.getTableDataFromService();
    }
    else
    {
      alert("nothing");
    }
  }
  AddEdit(type: string, item: Student) {
    this.type = type;
    localStorage.setItem('type', type);
    if (this.type == 'edit')
      this.StudentDetails = item;
  }
  
  update() {
    debugger
    let StudentInfo = this.Students.filter(m => m.Id == this.StudentDetails.Id)[0];
    StudentInfo.Name = this.StudentDetails.Name;
    StudentInfo.phone = this.StudentDetails.phone;
    StudentInfo.add = this.StudentDetails.add;

    this.StudentDetails = new Student();
    this.type = 'table';
  }
}
