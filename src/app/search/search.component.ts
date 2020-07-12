import { Component, OnInit } from '@angular/core';
import { GifService } from '../gif.service';
import { Validators, FormControl, FormGroup, FormArray } from '@angular/forms';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  userForm: FormGroup;

  constructor(private gifService: GifService) {
    this.userForm = new FormGroup({
      'name': new FormControl(null, Validators.required)
    })
  }

  ngOnInit(): void {
  }
  search(searchTerm: string) {
    if (searchTerm !== "") {
      this.gifService.searchGifs(searchTerm);

    }

  }

}
