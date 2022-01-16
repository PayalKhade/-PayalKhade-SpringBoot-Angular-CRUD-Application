import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserComponent } from './user/user.component';


 export const routes: Routes = [
   {path: 'users', component:UserComponent},
   {path: 'addUser', component:AddUserComponent},
   {path: 'updateUser/:id', component:UpdateUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[UserComponent]
