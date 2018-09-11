import { Component } from '@angular/core';
import 'chance';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    documents: TableDocument[] = [];

    constructor() {
        // generate some dummy data
        for (let idx = 0; idx < 5; idx++) {
            this.documents.push({
                selected: false,
                title: `Document ${idx + 1}`,
                author: chance.name(),
                date: chance.date({ year: new Date().getFullYear() }) as Date
            });
        }
    }
}

interface TableDocument {
    selected: boolean;
    title: string;
    author: string;
    date: Date;
}