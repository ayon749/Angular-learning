
import { Component } from '@angular/core';

import { CoursesService } from './courses.service';



@Component({
    selector:'courses',
    template:`
    {{text |summary:10}}
    `

    

})

export class CoursesComponent{
   
      text=`the currency pipe has been changed in Angular v5. The symbolDisplay option (third parameter) is now a string instead of a boolean. The accepted values are "code", "symbol" or "symbol-narrow".`
}