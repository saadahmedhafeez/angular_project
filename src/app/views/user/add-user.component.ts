import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html'
})
export class AddUserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loadFile = function(event) {
    console.log(event);
    var image = document.getElementById('output');
    image['src'] = URL.createObjectURL(event.target.files[0]);
  };
}
