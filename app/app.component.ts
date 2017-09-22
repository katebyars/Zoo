import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <new-animal id="left-float" class="col-md-3" (newAnimalSender)="addAnimal($event)"></new-animal>
    <animal-list id="right-float" class="col-md-9" [childAnimalList] = "masterAnimals" (clickSender)="editButtonClicked($event)"></animal-list>

    <edit-animal [childSelectedAnimal] = "selectedAnimal" (editButtonClickedSender) = "finishedEditing()"></edit-animal>
  `

})
export class AppComponent{
   currentFocus: string = 'Our Animals';
   selectedAnimal = null;
   masterAnimals: Animal[] = [];

  addAnimal(newAnimalFromChild: Animal){
    this.masterAnimals.push(newAnimalFromChild);
  }
  editButtonClicked(clickedAnimal){
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }

}
