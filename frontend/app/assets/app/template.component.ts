/**
 * Created by zhangxu on 2016/7/11.
 */
import {Component} from '@angular/core';

import {MigrateTypeBatchUpdateComponent} from './template/migrate-type-bu.component'
import {MigrateTypeInsertComponent} from './template/migrate-type-ins.component'

@Component({
  selector: 'app-dm-edit',
  templateUrl: 'app/template.component.html',
  directives: [MigrateTypeBatchUpdateComponent, MigrateTypeInsertComponent]
})

export class TemplateComponent {

  template:number = 0;

  step:number = 0;

  setTemplate(num) {
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