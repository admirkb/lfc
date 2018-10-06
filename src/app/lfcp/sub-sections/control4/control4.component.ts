import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-control4',
  templateUrl: './control4.component.html',
  styleUrls: ['./control4.component.css']
})
export class Control4Component implements OnInit {
  @Input() items$;
  constructor() { }

  ngOnInit() {

    console.log("items", this.items$)
    this.items$
      .subscribe((data) => {
        console.log("data", data)
      })
  }

}
