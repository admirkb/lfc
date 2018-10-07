import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-control3',
  templateUrl: './control3.component.html',
  styleUrls: ['./control3.component.css']
})
export class Control3Component implements OnInit {
  @Input() items$;
  constructor() { }

  ngOnInit() {

    this.items$
      .subscribe((data) => {
        console.log("data", data)
      })
  }
}

