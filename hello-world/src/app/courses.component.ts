
import { Component } from '@angular/core';
import { CoursesService } from './courses.service';



@Component({
    selector:'courses',
    template:`
    <h1>{{getTitle()}}</h1>
    <ul>
    <li *ngFor="let course of courses">
    {{course}}
    </li>
    </ul>
    `
})

export class CoursesComponent{
        title="List Of Course";

        getTitle()
        {
            return this.title;
        }

        courses;
            constructor(service:CoursesService){
                //let service=new CoursesService();
                this.courses=service.getCourses();
            }
    //     constructor()
    //     {
    //       let service=new CoursesService();
    //         this.courses=service.getCourses();
    //    }
}