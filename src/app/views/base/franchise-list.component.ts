import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { FranchiseService } from './service/franchise.service';

@Component({
  templateUrl: 'franchise-list.component.html'
})
export class FranchiseListComponent implements OnInit{

  public data: Object;
  public datareceived = false;
  constructor(private frService: FranchiseService) { }
  frenchise_img = new Subject;
  
  ngOnInit(): void {
    this.frService.getFrenchiseData().subscribe(response => {
      this.data = response
      this.datareceived = true
      this.frenchise_img.next('saad is great');
    })
  }
}
