/**
 * Created by zhangxu on 2016/7/12.
 */
import {Component} from '@angular/core';

import {DatabaseService} from "../common/database.service";

@Component({
  selector: 'app-dm-edit-type-ins',
  templateUrl: 'app/template/migrate-type-ins.component.html',
  styleUrls: ['app/template/migrate-type-ins.component.css'],
  providers: [DatabaseService]
})

export class MigrateTypeInsertComponent {

  private _db
  private _task_id = 1;

  constructor(db:DatabaseService) {
    this._db = db
  }

  private _conf_migrate_type = "insert"
  private _conf_task_id = 1;
  private _conf_source_fatch_mode;
  private _conf_source_db;
  private _conf_source_schema;
  private _conf_source_table;
  private _conf_source_sql;

  private _conf_target_db
  private _conf_target_schema;
  private _conf_target_table;


  // //0是没有配置完成，1是配置完成
  // private sourceConfigStatue:number = 0;
  // private targetConfigStatue:number = 0;
  // private migrateConfigStatue:number = 0;

  set_source_db(num) {
    this._conf_source_db = num
  }

  set_target_db(num) {
    this._conf_target_db = num
  }

  set_source_fatch_mode(statue) {
    this._conf_source_fatch_mode = statue == 1 ? "sql" : "table"
  }

  setSourceConfigure() {
    let obj;
    if (this._conf_source_fatch_mode == "sql") {
      obj = {
        mode: this._conf_source_fatch_mode,
        db: this._conf_source_db,
        sql: this._conf_source_sql
      }
    }
    else {
      obj = {
        mode: this._conf_source_fatch_mode,
        db: this._conf_source_db,
        schema: this._conf_source_schema,
        table: this._conf_source_table
      }
    }

    this._db.setSourceOfTask(obj, this._task_id).toPromise().then(p=>alert(p));
  }

  setTargetConfigure() {
    let obj = {
      db: this._conf_target_db,
      schema: this._conf_target_schema,
      table: this._conf_target_table
    }
    this._db.setTargetOfTask(obj, this._task_id).toPromise().then(p=>alert(p));
  }

  setMigrateConfigure() {
    alert("migrate")
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