import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule }  from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientService } from './service/http-client.service';
import { AddUserComponent } from './add-user/add-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { GetUserComponent } from './get-user/get-user.component';

import { DeleteUserComponent } from './delete-user/delete-user.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { UpdateUserComponent } from './update-user/update-user.component';
import {  MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DashboardComponent,
    AddUserComponent,
    GetUserComponent,

    DeleteUserComponent,
    UpdateUserComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatToolbarModule,MatButtonModule,MatDividerModule,MatSidenavModule,MatIconModule,
    RouterModule,HttpClientService,HttpClientModule,ReactiveFormsModule,FormsModule,NgxPaginationModule,MatPaginatorModule
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
const Routes: Routes=[
  {
      path: 'User',
      component: UserComponent
  },
  {
    path: 'addUser',
    component: AddUserComponent
  }

]

