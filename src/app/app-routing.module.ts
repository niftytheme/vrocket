import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Website Page Component
import { HomeComponent } from './home/home.component';
import { CloudHostingComponent } from './cloud-hosting/cloud-hosting.component';
import { VpsHostingComponent } from './vps-hosting/vps-hosting.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ContactComponent } from './contact/contact.component';
import { ContactSalesComponent } from './contact-sales/contact-sales.component';
import { ErrorComponent } from './error/error.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'cloudHosting',
    component: CloudHostingComponent
  },
  {
    path: 'vpsHosting',
    component: VpsHostingComponent
  },
  {
    path: 'aboutUs',
    component: AboutUsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signUp',
    component: SignUpComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'contactSales',
    component: ContactSalesComponent
  },
  {
    path: 'error',
    component: ErrorComponent
  },  
  {
    path: 'comingSoon',
    component: ComingSoonComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
