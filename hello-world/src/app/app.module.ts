import { CoursesService } from './courses.service';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses.component';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
