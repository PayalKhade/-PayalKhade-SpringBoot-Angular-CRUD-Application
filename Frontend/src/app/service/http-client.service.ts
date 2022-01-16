import { Injectable, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, Subject, tap} from 'rxjs';



export class User{
  constructor(
    public id: string,
    public firstName: string,
    public lastName: string,
    public emailId: string,
    public contactNo: string,
  ){

  }
}
@NgModule()

//this is service class
@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

   _refreshNeeded$ = new Subject<void>();

   get refreshNeeded$() {
    return this._refreshNeeded$;
  }
  
  // API='http://localhost:8090';
  constructor(
    private HttpClient: HttpClient
  ) { }


  //working without pagination
  // getUsers(){
  //   console.log('Test Call');
  //   return this.HttpClient.get<User[]>('http://localhost:8090/getUsers');
  // }


   // working with pagination
  getUsers(page:number, size:number): Observable<Object>{

    console.log('Test Call');

    return this.HttpClient.get<User>('http://localhost:8090/getUsers?pageNumber='+page+'&pageSize='+size);

  }

  getUserById(id: any): Observable<User> {
    return this.HttpClient.get<User>(`${'http://localhost:8090/getUser'}/${id}`);
  }


  addUser(User: object): Observable<object> {
    return this.HttpClient
    .post<object>('http://localhost:8090/addUser', User)
    .pipe(
      tap(()=>{ console.log('List Updated')
        this._refreshNeeded$.next();
      })
      
    );
  }

   updateUser(id: any,user:User): Observable<Object> {
     return this.HttpClient.put(`${'http://localhost:8090/updateUser'}/${id}`,user);
   }

  public deleteUser(id:any){
    return this.HttpClient.delete(`${'http://localhost:8090/deleteUser'}/${id}`);
  }

  


}

