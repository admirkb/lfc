import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { BasePageModule} from './base/base-page/base-page.module';
import { LfcpModule} from './lfcp/lfcp.module';
import { AboutUsViewComponent } from './views/about-us-view/about-us-view.component';
import { ContactUsViewComponent } from './views/contact-us-view/contact-us-view.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { LfcViewComponent } from './views/lfc-view/lfc-view.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsViewComponent,
    ContactUsViewComponent,
    HomeViewComponent,
    LfcViewComponent
  ],
  imports: [
    BrowserModule,
    LfcpModule,
    AppRoutingModule
    // BasePageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
