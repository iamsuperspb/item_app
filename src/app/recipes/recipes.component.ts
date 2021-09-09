import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  @Output() recipeAdded = new EventEmitter<{recipeName: string, recipeAmount}>();
  newRecipeName = '';
  newRecipeAmount = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onAddRecipe() {
    this.recipeAdded.emit({
      recipeName: this.newRecipeName,
      recipeAmount: this.newRecipeAmount
    });
  }

}
