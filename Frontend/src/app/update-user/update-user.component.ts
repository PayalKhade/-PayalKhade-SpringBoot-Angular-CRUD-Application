import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClientService } from '../service/http-client.service';
import { User } from '../user/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  id : any;
  user:User=new User();
  

  constructor(
    private httpClientService: HttpClientService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.httpClientService.getUserById(this.id).subscribe(data=>
     {this.user =data;});
     
  }

  onSubmit(){
    this.httpClientService.updateUser(this.user.id, this.user).subscribe(data=>{
         this.goToUserList();
    });
  }
  goToUserList()
{
  this.router.navigate(['/users']);
}


  }
