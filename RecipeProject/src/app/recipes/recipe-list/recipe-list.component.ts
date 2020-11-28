import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[]=[new Recipe('A Test Recipe','Simple test of recipe','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
  ),new Recipe('A Test Recipe','Simple test of recipe','https://www.eatwell101.com/wp-content/uploads/2019/04/chicken-and-asparagus-skillet-recipe-2.jpg')];
  constructor() { }

  ngOnInit(): void {
  }

}
