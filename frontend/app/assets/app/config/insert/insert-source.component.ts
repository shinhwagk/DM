/**
 * Created by zhangxu on 2016/7/14.
 */
import {Component, Inject, Input, Output, EventEmitter, OnInit} from "@angular/core";

import {DatabaseService} from "../../common/database.service";
import {_conf_source} from "./insert.service";

@Component({
  selector: 'app-dm-config-insert-source',
  templateUrl: 'app/config/insert/insert-source.component.html',
  styleUrls: ['app/config/insert/insert-source.component.css'],
  providers: [DatabaseService]
})

export class InsertSourceComponent {

  constructor(@Inject(DatabaseService) private _db:DatabaseService) {
  }

  @Input() _task_id;
  _conf_source_fatch_mode;
  _conf_source_db;
  private _conf_source_schema;
  _conf_source_table;
  _conf_source_sql;

  @Output() onSuccess = new EventEmitter<_conf_source>();

  set_source_fatch_mode(statue) {
    this._conf_source_fatch_mode = statue
  }

  set_source_db(num) {
    this._conf_source_db = num
  }

  setSourceConfigure() {
    let obj:_conf_source = {
      mode: this._conf_source_fatch_mode,
      db: this._conf_source_db
    };

    if (this._conf_source_fatch_mode == "sql") {
      obj.sql = this._conf_source_sql;
    }

    if (this._conf_source_fatch_mode == "table") {
      obj.schema = this._conf_source_schema
      obj.table = this._conf_source_table
    }

    this.onSuccess.emit(obj)

  }

}

// interface _conf_source {
//   mode:string;
//   db:number;
//   sql?:string;
//   schema?:string;
//   table?:string
// }
/**
 * sql
 * {
 *  "mode" : "sql",
 *  "db"   : "1",
 *  "sql"  : "select * from dual"
 * }
 *
 * table
 * {
 *  "mode"   : "table",
 *  "db"     : "1",
 *  "schema" : "gk"
 *  "table"  : "gk"
 * }
 */

