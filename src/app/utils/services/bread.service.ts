import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BreadService {
  protected breadCrumbs = ['Line 1', 'Line 2', 'Line 3']
  protected routeAction = [];

  constructor() { }

  bread(page: string) {

    switch (page) {
      case 'home':
      this.routeAction = ['Home 1', 'Home 2', 'Home 3'];
        break;
        case 'aboutus':
        this.routeAction = ['About Us 1', 'About Us 2', 'About Us 3'];
        break;
        case 'contactus':
        this.routeAction = ['Contact Us 1', 'Contact Us 2', 'Contact Us 3'];
        break;
        case 'lfc':
        this.routeAction = ['LFC 1', 'LFC 2', 'LFC 3'];
        break;
      default: {
        this.routeAction = [];
      }
    }

    return this.routeAction;
  }
}
