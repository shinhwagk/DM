/**
 * Created by zhangxu on 2016/7/11.
 */
import {Component, OnInit} from '@angular/core';

// import {MigrateTypeBatchUpdateComponent} from './config/migrate-type-bu.component'
import {InsertComponent} from './config/insert/insert.component'

@Component({
  selector: 'app-dm-config',
  templateUrl: 'app/config.component.html',
  directives: [InsertComponent]
})

export class TemplateComponent implements OnInit {

  ngOnInit() {
  }

  template:number = 0;

  step:number = 0;

  chooseTemplate(num) {
    this.template = num
  }

  close() {
    this.template = 0
  }

  setPNumber() {
    this.step -= 1
  }

  setNNumber() {
    this.step += 1
  }

}