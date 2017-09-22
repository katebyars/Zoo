import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
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
      <button class="btn-default" (click)="submitForm(species.value, name.value, age.value, diet.value, location.value, caretakers.value, sex.value, likes.value, dislikes.value)">Create Animal!</button>
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
