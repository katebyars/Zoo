import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <button class="btn" id="newAnimal" (click)="showHide = !showHide">New<br> Animal</button>
      <div *ngIf="showHide">
      <div class="well">
        <form class="newAnimalForm">
          <div class="form-group">
           <label> Species:</label>
           <input class="form-control"  #species type="text">
          </div>
          <div class="form-group">
            <label> Name:</label>
            <input class="form-control"  #name type="text">
          </div>
          <div class="form-group">
            <label> Age:</label>
            <input class="form-control"  #age type="number">
          </div>
          <div class="form-group">
            <label>Diet:</label>
            <input class="form-control"  #diet type="text" >
          </div>
          <div class="form-group">
            <label>Location:</label>
            <input  class="form-control" #location type="text" >
          </div>
          <div class="form-group">
            <label>Caretakers:</label>
            <input class="form-control" #caretakers type="number" >
          </div>
          <div class="form-group">
            <label>Sex:</label>
            <input class="form-control"  #sex type="text" >
          </div>
          <div class="form-group">
            <label>Likes:</label>
            <input  class="form-control" #likes type="text" >
          </div>
          <div class="form-group">
            <label>Dislikes:</label>
            <input class="form-control"  #dislikes type="text" >
          </div>
            <button class="btn-default" (click)="submitForm(species.value, name.value, age.value, diet.value, location.value, caretakers.value, sex.value, likes.value, dislikes.value)" (click)="showHide = !showHide" >Go!</button>
        </form>
      </div>
    </div>
  `
})

  export class newAnimalComponent {
    @Output() newAnimalSender = new EventEmitter();
    showHide: false;

    submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string){
      var newAnimalToAdd: Animal = new Animal (species, name, age, diet, location, caretakers, sex, likes, dislikes);
      this.newAnimalSender.emit(newAnimalToAdd);
    }
  }
