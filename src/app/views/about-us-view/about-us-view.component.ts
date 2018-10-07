import { Component, OnInit } from '@angular/core';
import { BasePageComponent } from '../../base/base-page/base-page.component';

@Component({
  selector: 'app-about-us-view',
  templateUrl: './about-us-view.component.html',
  styleUrls: ['./about-us-view.component.css']
})
export class AboutUsViewComponent extends BasePageComponent implements OnInit {


  ngOnInit() {
    
    super.ngOnInit()
  }

}
