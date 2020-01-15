import { Component, OnInit } from '@angular/core';
import { DataService } from '../data';
import { Router, ActivatedRoute } from '@angular/router';
import { IApplication } from '../entities';

@Component({
  selector: 'app-creat',
  templateUrl: './creat.component.html',
  styleUrls: ['./creat.component.scss']
})
export class CreatComponent implements OnInit {
  application: IApplication;

  constructor(
    private dataService: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const name = params.name;
      this.application = this.dataService.take(name);

      if (!this.application) {
        this.application = {
          name,
          source: null
        };
      }
    });
  }

  changeName(event): void {
    this.application.name = event.target.value;
  }

  save(): void {
    this.dataService.add(this.application);

    this.router.navigate(['applications']);
  }
}
