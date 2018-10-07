import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-control1',
  templateUrl: './control1.component.html',
  styleUrls: ['./control1.component.css']
})
export class Control1Component implements OnInit {
  @Input() items$;
  private id: string;
  private avatar_url: string;
  private created_at: string;

  constructor() { }

  ngOnInit() {

    this.items$
    .subscribe((data) => {
      console.log("data", data)

      this.id = data.id;
      this.created_at = data.created_at;
      this.avatar_url = data.avatar_url;
    })
  }

}
