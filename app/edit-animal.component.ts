import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector:'edit-animal',
  template: `
  <div *ngIf="childSelectedAnimal">
      <div>
       <label> Species:</label>
       <input [(ngModel)]="childSelectedAnimal.species"  type="text">
      </div>
      <div>
        <label> Name:</label>
        <input [(ngModel)]="childSelectedAnimal.name" type="text">
      </div>
      <div>
        <label> Age:</label>
        <input [(ngModel)]="childSelectedAnimal.age" type="number">
      </div>
      <div>
        <label>Diet:</label>
        <input [(ngModel)]="childSelectedAnimal.diet" type="text" >
      </div>
      <div>
        <label>Location:</label>
        <input [(ngModel)]="childSelectedAnimal.location" type="text" >
      </div>
      <div>
        <label>Caretakers:</label>
        <input [(ngModel)]="childSelectedAnimal.caretakers" type="number" >
      </div>
      <div>
        <label>Sex:</label>
        <input [(ngModel)]="childSelectedAnimal.sex" type="text" >
      </div>
      <div>
        <label>Likes:</label>
        <input [(ngModel)]="childSelectedAnimal.likes" type="text" >
      </div>
      <div>
        <label>Dislikes:</label>
        <input [(ngModel)]="childSelectedAnimal.dislikes" type="text" >
      </div>
      <button (click)="editButtonClicked()">Edit Animal!</button>

  </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() editButtonClickedSender = new EventEmitter();

  editButtonClicked() {
    this.editButtonClickedSender.emit();
  }

}
