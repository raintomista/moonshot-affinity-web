import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
<<<<<<< Updated upstream
import { AppRoutingModule } from './/app-routing.module';
=======
import { InvitationLoginComponent } from './invitation-login/invitation-login.component';
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    InvitationLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
