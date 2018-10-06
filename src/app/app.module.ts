import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BasePageModule} from './base/base-page/base-page.module';
import { LfcpModule} from './lfcp/lfcp.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LfcpModule
    // BasePageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
