import { Injectable } from '@angular/core';
import { IApplication } from '../entities';

@Injectable({ providedIn: 'root' })
export class DataService {
  applications: Map<string, IApplication>;

  constructor() {
    this.applications = new Map();
  }

  all(): IApplication[] {
    return Array.from(this.applications.values());
  }

  add(app: IApplication) {
    this.applications.set(app.name, app);
  }

  take(name: string): IApplication {
    return this.applications.get(name);
  }
}
