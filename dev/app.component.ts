import {Component} from 'angular2/core';
import {PropertyBindingComponent} from "./property-component";

@Component({
    selector: 'my-app',
    template: `
    <section class="parent">
      <h2>This is a parent component</h2>
      <h4>Please enter your name</h4>
      <input type="text" [(ngModel)]="name">
      <br><br>
        <section class="child">
        <my-property-binding [myName] ="name"></my-property-binding>
        </section>
    </section>
    `,
    directives: [PropertyBindingComponent]
})
export class AppComponent {
    name = '';
}