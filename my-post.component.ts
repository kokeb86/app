import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-post',
   templateUrl: './app.component.html',
  template: `
    <div *ngFor="let post of posts | mypipe:pipeargs">
<mypost [data]="post"></mypost>
</div>`,

  
  styles: []
})
export class MyPostComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
