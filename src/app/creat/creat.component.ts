import { Component, OnInit } from '@angular/core';
import { DataService } from '../data';
import { Router, ActivatedRoute } from '@angular/router';
import { IApplication } from '../entities';

declare var Blockly: any;

@Component({
  selector: 'app-creat',
  templateUrl: './creat.component.html',
  styleUrls: ['./creat.component.scss']
})
export class CreatComponent implements OnInit {
  application: IApplication;
  workspace: any;

  constructor(
    private dataService: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
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

  ngOnInit() {
    this.workspace = Blockly.inject('blocklyDiv', {
      toolbox: document.getElementById('toolbox'),
      scrollbars: false
    });

    debugger;

    if (this.application.source) {
      this.workspace.clear();
      Blockly.Xml.domToWorkspace(
        Blockly.Xml.textToDom(this.application.source),
        this.workspace
      );
    }
  }

  changeName(event): void {
    this.application.name = event.target.value;
  }

  save(): void {
    this.application.source = Blockly.Xml.domToText(
      Blockly.Xml.workspaceToDom(this.workspace)
    );

    this.dataService.add(this.application);

    this.router.navigate(['applications']);
  }
}
