import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ItemApp';

  dummyDatas = [{type: 'Test', amount: 0}];


  onRecipeAdded(recipeData: {recipeName: string, recipeAmount}) {
    this.dummyDatas.push({
      type: recipeData.recipeName,
      amount: recipeData.recipeAmount
    });
  }

}
