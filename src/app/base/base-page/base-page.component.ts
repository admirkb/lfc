import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-page',
  templateUrl: './base-page.component.html',
  styleUrls: ['./base-page.component.css']
})
export class BasePageComponent implements OnInit {
  protected breadCrumbs = ['Line 1', 'Line 2', 'Line 3']

  constructor() { }

  ngOnInit() {

    console.log("BasePageComponent")
  }

}
