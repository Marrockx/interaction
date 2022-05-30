import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';

import { FomanticUIModule } from 'ngx-fomantic-ui';
import { ButtonComponent } from './components/button/button.component';
import { NgToastModule } from 'ng-angular-popup';
import { HttpClientModule } from '@angular/common/http';
import { ButtonServiceService } from './button-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FomanticUIModule,
    NgToastModule,
    HttpClientModule
  ],
  providers: [ButtonServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
