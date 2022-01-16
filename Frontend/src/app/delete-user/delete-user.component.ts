import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
   user:any;
  constructor( private httpClientService: HttpClientService ) { }

  // public delteUser(id:number){
  //   let resp = this.httpClientService.deleteUser(id);
  //   resp.subscribe((data)=>this.user=data);
  //   (add: any) => {
  //     console.log(add);
  //     this.user();
  //   }


  // }

  ngOnInit(): void {
  }

}
