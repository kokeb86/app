import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mypost',
   templateUrl: './app.component.html',
  template: `
    <div *ngFor="let post of posts | mypipe:pipeargs">

</div>`,

  
  styles: []
})
export class MyPostComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
