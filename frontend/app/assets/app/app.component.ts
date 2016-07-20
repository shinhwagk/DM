import {Component, OnInit} from "@angular/core";

import {NavComponent} from "./nav.component";
import {TemplateComponent} from "./config.component";
import {TasksComponent} from "./tasks.component";

@Component({
  selector: 'app-dm',
  templateUrl: 'app/app.component.html',
  directives: [NavComponent, TemplateComponent, TasksComponent]
})

export class AppComponent implements OnInit {

  wsUri = "ws://127.0.0.1:9000/pingWs";
  ws = new WebSocket(this.wsUri);

  ngOnInit():any {
    // console.info(this.wsUri)
    this.ws.onopen = (evt)=> {
      this.ws.send("Aaaa")
    };
    this.ws.onmessage = (evt) => {
      console.info("geidata " + evt.data)
    };
  }

}


