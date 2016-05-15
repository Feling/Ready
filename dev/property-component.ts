import {Component} from 'angular2/core'


@Component({
    selector: 'my-property-binding',
    template: `
    <h2>This is the child componenet</h2>
    <p>Hey! {{myName}}</p>
    `,
    inputs: ['myName']

})
export class PropertyBindingComponent {
    myName = '';
}