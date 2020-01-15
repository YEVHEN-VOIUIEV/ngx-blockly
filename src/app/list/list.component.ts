import { Component, OnInit } from '@angular/core';
import { DataService } from '../data';
import { IApplication } from '../entities';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  items: IApplication[];

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {
    this.items = this.dataService.all();
  }
  select(name: string): void {
    this.router.navigate([`applications/${name}`]);
  }
}
