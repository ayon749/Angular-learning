
import { Component } from '@angular/core';
import { domain } from 'process';
import { CoursesService } from './courses.service';



@Component({
    selector:'courses',
    template:`
    {{Course.title | uppercase }}<br/>
    {{Course.rating |number:'2.2-2'}}<br/>
    {{Course.students |number}}<br/>
    {{Course.price |currency:'AUD':true:'3.2-2'}}<br/>
    {{Course.date |date:'shortDate'}}<br/>

    
    `

    

})

export class CoursesComponent{
   
      Course={
          title: "The complete angular course",
          rating: 4.9754,
          students:3075,
          price:190.95,
          date:new Date(2016,3,1)
      }
}