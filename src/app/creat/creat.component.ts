import { Component, OnInit } from '@angular/core';
import { DataService } from '../data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creat',
  templateUrl: './creat.component.html',
  styleUrls: ['./creat.component.scss']
})
export class CreatComponent implements OnInit {
  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {}

  create(event): void {
    this.dataService.add({
      name: event.target.value,
      source: event.target.value
    });

    this.router.navigate(['applications']);
  }
}
