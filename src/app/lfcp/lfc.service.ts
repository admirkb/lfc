import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { HttpServiceService } from '../utils/services/http-service.service';
import { Observable } from 'rxjs';

interface UserResponse {
  login: string,
  bio: string,
  company: string,
  organizations_url: string,
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class LfcService {

  constructor(private httpServiceService: HttpServiceService,
    private http: HttpClient) { }

  getGitHubUsersData() {

    return this.http.get<UserResponse>('https://api.github.com/users/admirkb')


  }

  getPersonsMock(): Observable<any> {

    // this.http.get('assets/serviceMock/pdf-history/getPdfHistory.json')
    //   .subscribe((data) => {
    //     console.log("data", data)
    //   },
    //     (err: HttpErrorResponse) => {
    //       if (err.error instanceof Error) {
    //         console.log("Client side error", err)
    //       } else {
    //         console.log("Server side error", err)
    //       }

    //     });

    return this.http.get<any>('assets/serviceMock/pdf-history/getPdfHistory.json');
  }

  getCoverablesMock(): Observable<any> {

    return this.http.get<any>('assets/serviceMock/coverables/getCoverables.json');
  }


}



    // this.httpServiceService.get('https://api.github.com/users/admirkb')
    //   .subscribe((data) => {
    //     console.log("data", data)
    //   },
    //     (err: HttpErrorResponse) => {
    //       if (err.error instanceof Error) {
    //         console.log("Client side error", err)
    //       } else {
    //         console.log("Server side error", err)
    //       }

    //     });

        // this.httpServiceService.get('assets/serviceMock/pdf-history/getPdfHistory.json')
    //   .subscribe((data) => {
    //     console.log("data", data)
    //   },
    //     (err: HttpErrorResponse) => {
    //       if (err.error instanceof Error) {
    //         console.log("Client side error", err)
    //       } else {
    //         console.log("Server side error", err)
    //       }

    //     });