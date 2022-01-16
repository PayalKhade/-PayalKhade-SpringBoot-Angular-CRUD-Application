import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';
import { User } from '../user/user';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GetUserComponent } from '../get-user/get-user.component'; //edited
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
form=new FormGroup({
  UserId: new FormControl('', [Validators.required,Validators.pattern("[0-9]{3}")]),
  firstName: new FormControl('', [Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z ]+")]),
  lastName: new FormControl('', [Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z ]+")]),
  emailId: new FormControl('', [Validators.required,Validators.email]),
  contactNo: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])
})


 user: User= new User();
  submitted = false;
  constructor(
    private httpClientService: HttpClientService,
    private router: Router)
   { }

  ngOnInit(): void {
     
  }
  newUser(): void {
    this.submitted = false;
    this.user = new User();
  }


  saveUser()
{      this.httpClientService.addUser(this.user)
        .subscribe({
          next: (res) => {
            console.log(res);
          }
          //error: (e) => console.error(e)
        });
        this.user=new User();
        this.gotoList();

    }
    onSubmit() {

      alert(JSON.stringify(this.form.value)) 
      this.submitted = true;  
      this.saveUser(); 
    }

    gotoList() {
      this.router.navigate(['/users']);
    }

  }

