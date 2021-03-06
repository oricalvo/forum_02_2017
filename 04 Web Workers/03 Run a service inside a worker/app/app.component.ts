import {Component, Inject} from '@angular/core';
import CalcService from "./CalcService";

@Component({
    selector: 'my-app',
    template: require("./app.component.html"),
    styles: [require("./app.component.css")]
})
export class AppComponent {
    private calcService: CalcService;

    constructor(@Inject("CalcService") calcService) {
        this.calcService = calcService;
    }

    calc() {
        this.calcService.run(2500).then(val => {
            console.log(val);
        });
    }
}