import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BookdetailsComponent } from './components/bookdetails/bookdetails.component';
import { AllbooksComponent } from './components/allbooks/allbooks.component';
import { MycartComponent } from './components/mycart/mycart.component';
import { OrderconfirmComponent } from './components/orderconfirm/orderconfirm.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { authGuard } from './auth/auth.guard';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { AdminallbooksComponent } from './components/adminallbooks/adminallbooks.component';
import { adminguardGuard } from './authentication/adminguard.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard', component: DashboardComponent,canActivate:[authGuard],
    children: [
      { path: "", redirectTo: "allbooks", pathMatch: "full" },
      { path: "allbooks", component: AllbooksComponent },
      { path: "bookdetails", component: BookdetailsComponent },
      { path: "mycart", component: MycartComponent },
      { path: "wishlist", component: WishlistComponent},
      { path: "order-confirmation", component: OrderconfirmComponent},
            
    ]
  },
  {
    path:'admin_dashboard',component:AdmindashboardComponent,canActivate:[adminguardGuard],
    children:[
      {path:'',redirectTo:"allbooks",pathMatch:"full"},
      {path:'allbooks',component:AdminallbooksComponent}
    ]
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }