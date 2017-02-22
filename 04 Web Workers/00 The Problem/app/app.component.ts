import { Component } from '@angular/core';
import {calc} from "./common";

@Component({
    selector: 'my-app',
    template: require("./app.component.html"),
    styles: [require("./app.component.css")]
})
export class AppComponent {
    calc() {
        calc(2500);
    }
}
