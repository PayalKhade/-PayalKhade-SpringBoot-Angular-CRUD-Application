import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClientService } from '../service/http-client.service';
import { User } from '../user/user';

@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css']
})
export class GetUserComponent implements OnInit {
  
  id:any;
  user: User = new User();
  constructor(
    private httpClientService: HttpClientService,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
   
    
  }

}
