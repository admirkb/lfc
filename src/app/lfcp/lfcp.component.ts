import { Component, OnInit } from '@angular/core';
import { BasePageComponent } from '../base/base-page/base-page.component';
import { LfcService } from './lfc.service'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable } from 'rxjs';

interface UserResponse {
  login: string,
  bio: string,
  company: string,
  organizations_url: string,
  url: string;
}

@Component({
  selector: 'app-lfcp',
  templateUrl: './lfcp.component.html',
  styleUrls: ['./lfcp.component.css']
})
export class LfcpComponent extends BasePageComponent implements OnInit {
  public userData$: Observable<UserResponse>;
  public persons$: Observable<any>;
  public coverables$: Observable<any>;

  constructor(private lfcService: LfcService) {
    super();
  }

  ngOnInit() {

    super.ngOnInit();

    console.log(this.breadCrumbs)

    this.userData$ = this.lfcService.getGitHubUsersData()
    this.persons$ = this.lfcService.getPersonsMock()
    this.coverables$ = this.lfcService.getCoverablesMock()

    this.lfcService.getPersonsMock()
      .subscribe((data) => {
        console.log("data", data)
      },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log("Client side error", err)
          } else {
            console.log("Server side error", err)
          }

        });


    this.lfcService.getCoverablesMock()
      .subscribe((data) => {
        console.log("data", data)
      },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log("Client side error", err)
          } else {
            console.log("Server side error", err)
          }

        });
  }


}
