import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LfcpComponent } from './lfcp.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { BasePageModule } from '../base/base-page/base-page.module';
import { Control1Component } from './sub-sections/control1/control1.component';
import { Control2Component } from './sub-sections/control2/control2.component';
import { Control3Component } from './sub-sections/control3/control3.component';
import { Control4Component } from './sub-sections/control4/control4.component';

@NgModule({
  imports: [
    CommonModule,
    BasePageModule,
    HttpClientModule
  ],
  declarations: [LfcpComponent, Control1Component, Control2Component, Control3Component, Control4Component],
  exports: [LfcpComponent],
  // providers: [
  //   {
  //     provide: HTTP_INTERCEPTORS,
  //     useClass: null,
  //     multi: true,
  //   }
  // ]

})
export class LfcpModule { }
