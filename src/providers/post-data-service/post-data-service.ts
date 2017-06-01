import { Injectable } from '@angular/core';
import { Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PostDataServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PostDataServiceProvider {

  constructor(public http: Http) {
    console.log('Hello PostDataServiceProvider Provider');
  }
postData(body){
    console.log(body);
   let headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Authorization','test');
    headers.append('Access-Control-Allow-Origin','*')
 return this.http.post('http://192.168.12.90:8080/BillpayDatabase/rest/path/posturlConsume',JSON.stringify(body),{headers:headers}).map(res => res.json());
}
}
