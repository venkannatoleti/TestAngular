import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  // title = "my test component";
  @Input() title:string;
  //another input
  @Input() anotherData:string
  constructor() { }

  ngOnInit(): void {
  }

}
