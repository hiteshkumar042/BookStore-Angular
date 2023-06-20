import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './components/login/login.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DisplaybookComponent } from './components/displaybook/displaybook.component';
import { BookdetailsComponent } from './components/bookdetails/bookdetails.component';
import { AllbooksComponent } from './components/allbooks/allbooks.component';
import { MycartComponent } from './components/mycart/mycart.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    DisplaybookComponent,
    BookdetailsComponent,
    AllbooksComponent,
    MycartComponent,
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule, AppRoutingModule,
    FormsModule,ReactiveFormsModule,HttpClientModule,
    MatButtonModule,MatTabsModule,MatCardModule,MatFormFieldModule,MatInputModule,MatIconModule,MatSnackBarModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
