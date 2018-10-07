import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription, ReplaySubject } from 'rxjs';
import { BasePageComponent } from '../../base/base-page/base-page.component';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent extends BasePageComponent implements OnInit {
  private routeSubscription: Subscription;

  // constructor(protected activatedRoute: ActivatedRoute) {
  //   super(activatedRoute);
  // }

  ngOnInit() {

    super.ngOnInit()

    // this.activatedRoute.url.subscribe(url => {
      console.log(this.routeName )
    // });
    this.routeSubscription = this.activatedRoute.queryParamMap.subscribe(params => {

      console.log(params)

    });
  }

}
