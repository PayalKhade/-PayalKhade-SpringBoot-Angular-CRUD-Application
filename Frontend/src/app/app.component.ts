import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gearup';

  constructor(private router:Router){}

  goToPage(User:string):void{
    this.router.navigate([`${User}`]);
  }
}
