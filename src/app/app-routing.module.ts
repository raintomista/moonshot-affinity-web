import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvitationLoginComponent } from './invitation-login/invitation-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CampaignsComponent } from './campaigns/campaigns.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, 
  { path: 'invitation-login', component: InvitationLoginComponent },
  { path: 'dashboard', component: DashboardComponent,
    children: [
      {path: 'campaigns', component: CampaignsComponent}
    ]
  },

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
