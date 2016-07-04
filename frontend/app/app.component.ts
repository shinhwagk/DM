import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent implements OnInit {
  HEROES: Hero[] = [
    { id: 11, type: "table->table", source: 'fun', s_schema: 'fsm', s_table: 'f', target: 'fun2', t_scehma: 'fff', t_table: 'xx' },
    { id: 11, type: "table->table", source: 'fun', s_schema: 'fsm', s_table: 'f', target: 'fun2', t_scehma: 'fff', t_table: 'xx' },
    { id: 11, type: "table->table", source: 'fun', s_schema: 'fsm', s_table: 'f', target: 'fun2', t_scehma: 'fff', t_table: 'xx' },
    { id: 11, type: "table->table", source: 'fun', s_schema: 'fsm', s_table: 'f', target: 'fun2', t_scehma: 'fff', t_table: 'xx' },
    { id: 11, type: "table->table", source: 'fun', s_schema: 'fsm', s_table: 'f', target: 'fun2', t_scehma: 'fff', t_table: 'xx' }
  ];

  ngOnInit(){
    // alert(JSON.stringify(this.HEROES))
    // alert(this.HEROES[1].id)
  }
}

class Hero {
  id: number;
  type: string;
  source: string;
  s_schema: string;
  s_table: string;
  target: string;
  t_scehma: string;
  t_table: string;
}
