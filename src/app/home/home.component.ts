import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  text = 'home page';

  persons = [{ id: 1, firstName: 'Jason', lastName: 'Watmore', username: 'test', role: 'Backend Team' },
  { id: 2, firstName: 'Büşra', lastName: 'Akın', username: 'Busra', role: 'Frontend Team' },
  { id: 3, firstName: 'Mark', lastName: 'Otto', username: 'marko', role: 'Backend Team' },
  { id: 4, firstName: 'Jacob', lastName: 'Thornton', username: 'jath', role: 'Test Team' },
  { id: 5, firstName: 'Melek', lastName: 'Kılıç', username: 'melek', role: 'Frontend Team' },
  { id: 6, firstName: 'Jale', lastName: 'Aslan', username: 'jale', role: 'Frontend Team' },
  { id: 7, firstName: 'Meriç', lastName: 'Kaptan', username: 'meriç', role: 'Frontend Team' },
  { id: 8, firstname: 'Mustafa', lastname: 'Akocak' username: 'akocak' role: 'Backend Team'}

  ]; 

  

  filteredpersons = this.persons;

  backendbuttononclick(){ 
   this.filteredpersons = this.persons.filter(x=>x.role=='Backend Team');
  }

   
 frontendbuttononclick(){
   this.filteredpersons = this.persons.filter(x=>x.role=='Frontend Team');
  }
  

   
 testbuttononclick(){
   this.filteredpersons = this.persons.filter(x=>x.role=='Test Team');
  
 }
    
  allbuttononclick(){
   this.filteredpersons = this.persons;
  }

  constructor() { }

  ngOnInit() {
  }

}