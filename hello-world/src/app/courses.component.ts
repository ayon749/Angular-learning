
import { Component } from '@angular/core';
import { domain } from 'process';
import { CoursesService } from './courses.service';



@Component({
    selector:'courses',
    template:`
    <div (click)="onClick()">
   
    <button [style.backgroundColor]="isActive ? 'blue':'white'" (click)="onSave($event)">
    Save
    </button> 
   
    </div>
    <input [(ngModel)]="email" (keyUp.enter)="onKeyUp()"/>
    `

    

})

export class CoursesComponent{
   
       isActive=true;
       onClick(){
           console.log("Div is in use.");
       }
       onSave($event)
       {
           $event.stopPropagation();
           console.log("Button is clicked",$event);
        
        
        }
        email="me@domain.com"
        onKeyUp(){
            console.log(this.email);
        }
}