import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BreadService } from '../../utils/services/bread.service';
@Component({
  selector: 'app-base-page',
  templateUrl: './base-page.component.html',
  styleUrls: ['./base-page.component.css']
})
export class BasePageComponent implements OnInit {
  protected breadCrumbs = ['sdsds']
  protected routeName = "";

  constructor(
    protected activatedRoute: ActivatedRoute,
    protected breadService: BreadService) { }

  ngOnInit() {



    console.log("BasePageComponent")
    this.activatedRoute.url.subscribe(url => {
      console.log(url[0].path)
      this.routeName = url[0].path;
      this.breadCrumbs = this.breadService.bread(this.routeName);
    });
  }

}
