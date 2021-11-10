import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class DataHandlerService {

  constructor(private http: HttpClient) {
  }

  print() {
    return  this.http.get("https://jsonplaceholder.typicode.com/posts");
  }

}
