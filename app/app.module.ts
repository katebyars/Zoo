import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }  from '@angular/forms';
import { AnimalListComponent }  from './animal-list.component';
import { EditAnimalComponent } from './edit-animal.component';
import { newAnimalComponent } from './new-animal.component';
import { AgePipe } from './age.pipe';

@NgModule({
  imports: [ BrowserModule, FormsModule],     //allows us to run conditionals in our components
  declarations: [ AppComponent, newAnimalComponent, EditAnimalComponent, AnimalListComponent, AgePipe ], //all components that will reside in this module
  bootstrap:    [ AppComponent ]  //minimum required components to run
})

//this is the root module, likely the only one we'll have at our level
export class AppModule { }
