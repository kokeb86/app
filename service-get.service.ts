import { Injectable } from '@angular/core';
import {HttpModule} from '@angular/http';
import { Headers, Http } from '@angular/http';
import { MyPostComponent } from './my-post.component';

import 'rxjs/add/operator/toPromise';
@Injectable()
export class ServiceGetService {
 private postUrl = 'http://jsonplaceholder.typicode.com/posts?userId=1';  // URL to web api
    private headers = new Headers({ 'Content-Type': 'application/json' });
  constructor(private http: Http)  { 
 
  }
  getPosts(): Promise<post[]> {
        return this.http.get(this.posttUrl).toPromise().then(res => res.json().data as post[]).catch(this.handleError);
    }
getPost(id: number): Promise<post> {
        return this.getposts().then(Products => Products.find(post => post.id === id));
    }
}
