import { Component, OnInit } from '@angular/core';
import { SlabService } from '../slab.service';
import { Observable } from 'rxjs';
import { Slab} from '../slab';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slab-list',
  templateUrl: './slab-list.component.html',
  styleUrls: ['./slab-list.component.css']
})
export class SlabListComponent implements OnInit {

  slabs : Observable<Slab[]>

  constructor(private slabService : SlabService , private router : Router) { }

  ngOnInit() {
    console.log("ngOnInit() start");
    this.loadSlabs();
    console.log("ngOnInit() ends");
  }

  loadSlabs()
  {
    console.log("loadSlabs() start");
    this.slabs = this.slabService.getAllSlab();
    console.log(this.slabs);
    console.log("In loadSlabs() ends");
  }
  deleteSlab(slabId:number)
  {
    console.log("deleteSlab() start");

  this.slabService.deleteSlab(slabId).subscribe( data => {
    console.log(data);
    this.loadSlabs();
  },
  error => console.log(error));

  console.log("deleteAddress() ends");

  }


}
