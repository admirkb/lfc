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
  public pdfHistory: any[] = [];
  public pdfHistory$: Observable<any>;

  constructor(private lfcService: LfcService) {
    super();
  }

  ngOnInit() {

    super.ngOnInit();

    console.log(this.breadCrumbs)

    this.userData$ = this.lfcService.getGitHubUsersData()
    // .subscribe((data) => {
    //   console.log("Login", data.login)
    //   console.log("Organizations Url", data.organizations_url)
    //   console.log("Url", data.url)
    // },
    //   (err: HttpErrorResponse) => {
    //     if (err.error instanceof Error) {
    //       console.log("Client side error", err)
    //     } else {
    //       console.log("Server side error", err)
    //     }

    //   });

    this.pdfHistory$ = this.lfcService.getPdfHistoryMock()

    this.lfcService.getPdfHistoryMock()
      .subscribe((data) => {
        console.log("data", data)
        this.pdfHistory.push(data);
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
