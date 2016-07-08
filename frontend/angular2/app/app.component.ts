import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styles: [`table {
      font-size: 13px;
      font-family: Consolas;
    }
    td,th {
      padding: 4px 10px 0px 10px;
      vertical-align:middle;
      text-align:center;
    }
    .glyphicon-keyword:before {
        content: "hexvalue";
    }`]
})
export class AppComponent implements OnInit {

  HEROES: Hero[] = [
    { id: 11, type: "table--> inc -->table", source: 'fun', s_schema: 'fsm', s_table: 'f', target: 'fun2', t_schema: 'fff', t_table: 'xx', min1: 10 },
    { id: 11, type: "table--> once -->table", source: 'fun', s_schema: 'fsm', s_table: 'f', target: 'fun2', t_schema: 'fff', t_table: 'xx', min1: 70 },
    { id: 11, type: "sql--> update -->table", source: 'fun', s_schema: 'fsm', s_table: 'f', target: 'fun2', t_schema: 'fff', t_table: 'xx', min1: 90 },
    { id: 11, type: "sql--> merge -->table", source: 'fun', s_schema: 'fsm', s_table: 'f', target: 'fun2', t_schema: 'fff', t_table: 'xx', min1: 30 },
    { id: 11, type: "sql--> insert -->table", source: 'fun', s_schema: 'fsm', s_table: 'f', target: 'fun2', t_schema: 'fff', t_table: 'xx', min1: 20 }
  ];

  ngOnInit() {
    // alert(JSON.stringify(this.HEROES))
    // alert(this.HEROES[1].id)
  }

  abc(){
    return 1;
  }
}

class Hero {
  id: number;
  type: string;
  source: string;
  s_schema: string;
  s_table: string;
  target: string;
  t_schema: string;
  t_table: string;
  min1: number;
}
