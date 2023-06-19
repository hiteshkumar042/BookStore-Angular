import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BookdetailsComponent } from './components/bookdetails/bookdetails.component';
import { AllbooksComponent } from './components/allbooks/allbooks.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: "", redirectTo: "allbooks", pathMatch: "full" },
      { path: "allbooks", component: AllbooksComponent },
      { path: "bookdetails", component: BookdetailsComponent }]
  },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }