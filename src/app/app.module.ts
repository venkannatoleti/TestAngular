import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APIService } from './api.service';
import { TestComponent } from './test/test.component';
import { MixedCasePipe } from './pipes/mixed-case.pipe';
import { BlueButtonDirective } from './Directives/blue-button.directive';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    MixedCasePipe,
    BlueButtonDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [APIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
