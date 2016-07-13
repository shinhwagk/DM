import {Component} from "@angular/core";

import {NavComponent} from "./nav.component";
import {TemplateComponent} from "./template.component";
import {TasksComponent} from "./tasks.component";

@Component({
    selector: 'app-dm',
    templateUrl: 'app/app.component.html',
    directives: [NavComponent, TemplateComponent, TasksComponent]
})

export class AppComponent {
}


