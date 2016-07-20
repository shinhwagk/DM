/**
 * Created by zhangxu on 2016/7/12.
 */
import {Component, Inject, OnInit} from '@angular/core';

import {DatabaseService} from "../../common/database.service";
import {InsertTargetComponent} from "./insert-target.component";
import {InsertSourceComponent} from "./insert-source.component";
import {MatchComponent} from "./match.component";
import {_conf_insert, _conf_source, _conf_target} from "./insert.service";

@Component({
  selector: 'app-dm-config-insert',
  templateUrl: 'app/config/insert/insert.component.html',
  styleUrls: ['app/config/insert/insert.component.css'],
  directives: [InsertSourceComponent, InsertTargetComponent, MatchComponent],
  providers: [DatabaseService]
})

export class InsertComponent implements OnInit {
  ngOnInit() {

  }

  _task_id = 1;

  constructor(@Inject(DatabaseService) private _db:DatabaseService) {
  }

  private _conf_migrate_type = "insert"
  private _conf_task_id = 1;

  _source_configuring:boolean = true
  _target_configuring:boolean = false
  _match_configuring:boolean = false

  _insert_config:_conf_insert = {id: 1}
  _source_config:_conf_source
  _target_config:_conf_target
  _match_config

  private _conf_target_db
  private _conf_target_schema;
  private _conf_target_table;

  set_target_db(num) {
    this._conf_target_db = num
  }

  setMigrateConfigure() {
    alert("migrate")
  }

  setSourceConfigSuccess(obj:_conf_source) {
    this._source_configuring = false
    this._target_configuring = true
    this._source_config = obj
    this._insert_config.source = obj
  }

  setTargetConfigSuccess(obj:_conf_target) {
    this._target_configuring = false
    this._match_configuring = true
    this._target_config = obj
    this._insert_config.target = obj
  }

}


// interface Config_Source {
//   db:number;
//   fatch_mode:string;
//   schema:string;
//   table:string;
//   sql:string;
// }
// interface _insert {
//     _id:number;
//     _type:string;
//     _source:_source;
//     _target:_target;
// }
// interface _source {
//     _db:_db;
//     _out:_out;
// }
// interface _target {
//     _db:_db;
//     _in:_in;
// }
// interface  _db {
//     _type:string;
//     _name:string;
//     _user:string;
// }
// interface _out {
//     _type:string;
//     _info:_info;
// }
// interface _in {
//     _info:_info;
// }
//
// interface _info_table {
//     _schema:string;
//     _table:string;
// }
// interface _info_sql{
//     _sql:string;
// }
//
//
// let a = `
// {
//   "id": 11,
//   "type": "insert",
//   "statue": "等待被执行|执行中|执行完毕|执行错误",
//   "source": {
//     "db": 1,
//     "out": {
//       "type": "sql | table",
//       "info": {
//         "schema": "fff",
//         "table": "sxxx"
//       }
//     }
//   },
//   "target": {
//     "db": 1,
//     "in": {
//       "info": {
//         "schema": "fff",
//         "table": "sxxx"
//       }
//     }
//   }
// }
// `