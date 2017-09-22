import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';


@Component({
  selector: 'animal-list',
  template:
  `
  <div class="row">
    <select (change)="onChange($event.target.value)">
       <option value="allAnimals" selected="selected">All Animals</option>
       <option value="youngAnimals">Aged: less than two</option>
       <option value="matureAnimals" >Aged: two years old and older</option>
     </select>
  </div>
    <div class="col-md-9" id="right-float">
     <ul>
       <li (click)="(currentAnimal)" *ngFor="let currentAnimal of childAnimalList | age: filterByAge">
        <h2>{{currentAnimal.name}}</h2>
        <div><p>{{currentAnimal.name}} is a {{currentAnimal.age}} year old {{currentAnimal.sex}} {{currentAnimal.species}} who eats {{currentAnimal.diet}} and lives in {{currentAnimal.location}}. It takes {{currentAnimal.caretakers}} caretakers to care for {{currentAnimal.name}}! {{currentAnimal.name}} likes {{currentAnimal.likes}} and dislikes {{currentAnimal.dislikes}}</p>
         <button class="btn" (click)="editButtonHasBeenClicked(currentAnimal)">Edit!</button>
        </div>
       </li>
     </ul>
  </div>
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
