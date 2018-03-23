import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvitationLoginComponent } from './invitation-login/invitation-login.component';

const routes: Routes = [
  { path: '', component: InvitationLoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
