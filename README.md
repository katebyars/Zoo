* Add custom SASS styling with corresponding Gulp tasks to compile.
* Display of the total number of caretakers needed in a day.
* Add a property that records when each animal was admitted. The user could enter a date and time, or the app can generate a timestamp.
* Expand the application to differentiate between animals' species. Group the animals into those categories. Then include a component to display the total needed caretakers for whichever species the user selects.
* Add a new master component to average the total age for each species.
* Show animals based on diet type. Then, show all animals who eat meat (carnivores AND omnivores) - new pipe
* cause an api to access a list of species
* api access a list of diet items
* feed long and lat location into a google map to show where in th world animals come from
* do a better graphic to overlay google maps ... something prettier

*



# Zoo Log App for the visually impaired

#### Epicodus Fall 2017

#### Author : Kate Byars

## Description

_An application which allows you to log animals in a zoo with easy readability for the visually impaired._

_The home page of the application, where you can read about the zoo._
![The Home Page](resources/gitimages/home.png)

_A form allows you to enter new animals into the zoo's log._
![The search form](resources/gitimages/search-form.png)

_Each record is displayed in large format for the visually impaired._
![Large Print for the visually impaired](resources/gitimages/format.png)

_Results are filtered using a select drop down._
![You can sort the results via dropdown menu](resources/gitimages/menu.png)

_The project is made according to font specs for the visually impaired, such as those found here:http://www.afb.org/info/reading-and-writing/making-print-more-readable/35 _

## Setup/Installation Requirements
Bower, NPM and dependencies as listed in the files uploaded in this application.

* Clone this project from git hub
* install NPM
* initialize all the dependencies

## Specifications

| Behavior      | Example Input      | Example Output       |
| I want to log a newly-admitted animal by submitting a form with animal species, name, age, diet, zoo location, number of needed caretakers, sex, one like and one dislike.|Bobo the monkey's information| A bullet point all about BoBo|
|I want to view a list of animals I have logged.|Sort to All Animals in the sort select box|See all animals|
|I want options to view all animals, only young animals (less than 2 years of age), or only mature animals (2 years of age and older).|Select animals under two years old in the select box| See animals that are under two years|
|I want to click an animal to edit its name, age or caretakers.enter a new animal into the zoo's log and re| cancer  | a list of doctors and their info  |Click Edit|See a form that allows you to edit information|


## Inquiries ##
_katebyars5@gmail.com

## Known Bugs
_There are no known bugs_

## Technologies Used

* _Atom_
* _Gulp_
* _Bower_
* _Karma_
* _Jasmine_
* _Angular_
* _APM Typescript_

### License

Copyright &copy; 2017 Kate Byars
