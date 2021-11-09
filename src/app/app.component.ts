import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'angular-first-projet';
  foo: Array<any> | undefined;

  ngOnInit(): void {
    fetch("https://jsonplaceholder.typicode.com/posts").then(result => {
      result.json().then(res => {
        this.foo = res;
      })
    })
  }
}
