import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClientService,User } from '../service/http-client.service';
import { Router } from '@angular/router';
import { UpdateUserComponent } from '../update-user/update-user.component';
import { PageEvent } from '@angular/material/paginator';
import { tap } from 'rxjs/operators';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @ViewChild('filterInput')
  filterInput!: NgModel;
  POSTS: any;
  count = 0;
  //tableSize = 7;
  //tableSizes = [3, 6, 9, 12];

  users: User[] | undefined;
  user:any;

  totalElements: number=10;
  page: any=0;
  size: any=5;
  

  constructor(
    private httpClientService: HttpClientService,private router: Router
  ) { }
  // public delteUser(id:any){
  //   let resp = this.httpClientService.deleteUser(id);
  //   resp.subscribe((data)=>this.user=data);

  // }


  ngOnInit():void{
    this.httpClientService.refreshNeeded$.subscribe(()=>{this.getUsers()});
    this.getUsers();
  
  }


  gotoList() {
    this.router.navigate(['/addUser']);
  }

  getUsers() {
    this.httpClientService.getUsers(this.page,this.size).subscribe(

      (resp) => {
        let response:any=resp;
        this.users = response.userlist ;  
        console.log(this.users);
        this.totalElements=response.totalElements})
      }
 
 deleteUser(user:any){
   this.httpClientService.deleteUser(user.id).subscribe(
     (resp) => {
       console.log(resp);
      this.ngOnInit();
      })

   
 }

 updateUser(id:any){
   this.router.navigate(['updateUser',id]);
 }

 nextPage(event:PageEvent){
   let page=event.pageIndex.toString()
   let size=event.pageSize.toString()
   this.page=page;
   this.size=size;
   this.ngOnInit()
 }

 


  }


  
  


