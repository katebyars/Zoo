import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <form>
  <div>
   <label> Species:</label>
   <input #species type="text">
  </div>
  <div>
    <label> Name:</label>
    <input #name type="text">
  </div>
  <div>
    <label> Age:</label>
    <input #age type="number">
  </div>
  <div>
    <label>Diet:</label>
    <input #diet type="text" >
  </div>
  <div>
    <label>Location:</label>
    <input #location type="text" >
  </div>
  <div>
    <label>Caretakers:</label>
    <input #caretakers type="number" >
  </div>
  <div>
    <label>Sex:</label>
    <input #sex type="text" >
  </div>
  <div>
    <label>Likes:</label>
    <input #likes type="text" >
  </div>
  <div>
    <label>Dislikes:</label>
    <input #dislikes type="text" >
  </div>
    <button (click)="submitForm(species.value, name.value, age.value, diet.value, location.value, caretakers.value, sex.value, likes.value, dislikes.value)">Create Animal!</button>
  </form>
  `
})

  export class newAnimalComponent {
    @Output() newAnimalSender = new EventEmitter();

    submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string){
      var newAnimalToAdd: Animal = new Animal (species, name, age, diet, location, caretakers, sex, likes, dislikes);
      this.newAnimalSender.emit(newAnimalToAdd);
    }
  }
