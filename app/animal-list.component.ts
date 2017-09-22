import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';


@Component({
  selector: 'animal-list',
  template: `
    <select (change)="onChange($event.target.value)">
       <option value="allAnimals" selected="selected">All Animals</option>
       <option value="youngAnimals">Aged: less than two</option>
       <option value="matureAnimals" >Aged: two years old and older</option>
     </select>
   <ul>
     <li (click)="(currentAnimal)" *ngFor="let currentAnimal of childAnimalList | age: filterByAge">{{currentAnimal.name}} {{currentAnimal.species}} {{currentAnimal.age}}
      {{currentAnimal.diet}} {{currentAnimal.location}} {{currentAnimal.caretakers}} {{currentAnimal.sex}} {{currentAnimal.likes}} {{currentAnimal.dislikes}} {{currentAnimal.caretakers}}
       <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit!</button>
     </li>
   </ul>
 `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();
  filterByAge: string = "allAnimals";

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

  onChange(optionFromMenu) {
  this.filterByAge = optionFromMenu;
 }

}
