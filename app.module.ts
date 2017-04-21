import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ServiceGetService } from './service-get.service';
import { MyPostComponent } from './my-post.component';

@NgModule({
  declarations: [
    AppComponent,
    MyPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ServiceGetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
