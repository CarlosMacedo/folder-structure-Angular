/*
 * The difference here is that it can be injected into any component.
 * While the services on core folder are injected directly into the root.
 *
 */
import { Injectable } from '@angular/core';

@Injectable()
export class ExampleService {
  constructor() {}
}
