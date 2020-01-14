import { Component, OnInit } from "@angular/core";
import { DataService } from "../data";
import { IApplication } from "../entities";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"]
})
export class ListComponent implements OnInit {
  items: IApplication[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.items = this.dataService.all();
  }
}
