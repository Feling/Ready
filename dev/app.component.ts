import {Component} from 'angular2/core';
import {PropertyBindingComponent} from "./property-component";

@Component({
    selector: 'my-app',
    template: `
    <section class="parent">
      <h2>This is a parent component</h2>
        <section class="child">
        <my-property-binding></my-property-binding>
        </section>
    </section>
    `,
    directives: [PropertyBindingComponent]
})
export class AppComponent {

}