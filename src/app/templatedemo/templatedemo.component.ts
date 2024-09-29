import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templatedemo',
  templateUrl: './templatedemo.component.html',
  styleUrls: ['./templatedemo.component.css']
})
export class TemplatedemoComponent implements OnInit {

  constructor() { }
  isLoggedIn: Boolean = true;

  ngOnInit(): void {
  }

}
