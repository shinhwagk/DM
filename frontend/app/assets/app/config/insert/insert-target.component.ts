/**
 * Created by zhangxu on 2016/7/14.
 */
import {Component, Inject, Input, Output, EventEmitter} from "@angular/core";

import {DatabaseService} from "../../common/database.service";
import {_conf_target} from "./insert.service";

@Component({
  selector: 'app-dm-config-insert-target',
  templateUrl: 'app/config/insert/insert-target.component.html',
  styleUrls: ['app/config/insert/insert-target.component.css'],
  providers: [DatabaseService]
})

export class InsertTargetComponent {

  constructor(@Inject(DatabaseService) private _db:DatabaseService) {
  }

  _conf_target_db
  _conf_target_schema
  _conf_target_table

  @Output() onSuccess = new EventEmitter<_conf_target>();
  @Input() _task_id;

  setTargetConfigure() {
    let obj:_conf_target = {
      db: this._conf_target_db,
      schema: this._conf_target_schema,
      table: this._conf_target_table
    }
    this.onSuccess.emit(obj)
    // this._db.setTargetOfTask(obj, this._task_id).toPromise().then(p=>alert(p));
  }
}