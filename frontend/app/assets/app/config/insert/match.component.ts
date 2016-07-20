/**
 * Created by zhangxu on 2016/7/18.
 */
import {Component, Inject, OnInit, Input} from "@angular/core";

import {DatabaseService} from "../../common/database.service";
import {_conf_insert, _conf_source} from "./insert.service";

@Component({
  selector: 'app-dm-config-insert-match',
  templateUrl: 'app/config/insert/match.component.html',
  styleUrls: ['app/config/insert/match.component.css'],
  providers: [DatabaseService]
})

export class MatchComponent implements OnInit {

  constructor(@Inject(DatabaseService) private _db:DatabaseService) {
  }

  @Input() _insert_config:_conf_insert

  ngOnInit() {
    this._db.getSourceColumnsByTaskId(this._insert_config).toPromise().then(p=> {
      this._source_columns_info = p
      this._source_columns_number = this._source_columns_info.length
    })

    this._db.getTargetColumnsByTaskId(this._insert_config).toPromise().then(p=> {
      this._target_columns_info = p
      this._target_columns_number = this._target_columns_info.length
    })
  }

  source_column_up(n:number) {
    if (n > 0) {
      let tmp:[string,string] = this._source_columns_info[n - 1]
      this._source_columns_info[n - 1] = this._source_columns_info[n]
      this._source_columns_info[n] = tmp
    }
  }

  source_column_down(n:number) {
    if (n < this._source_columns_number - 1) {
      let tmp:[string,string] = this._source_columns_info[n + 1]
      this._source_columns_info[n + 1] = this._source_columns_info[n]
      this._source_columns_info[n] = tmp
    }
  }

  lockStyle(n:number) {
    let styles = {
      'background-color': this.judgeLocked(n) ? 'lavender' : 'white'
    };
    return styles;
  }

  judgeLocked(n:number):boolean {
    if (this._source_locks.indexOf(n) >= 0) {
      return true
    }
    else {
      return false
    }
  }

  lockCol(n:number) {
    this._source_locks.push(n)
  }

  unLockCol(n:number) {
    let i = this._source_locks.indexOf(n)
    this._source_locks.splice(i, 1)
  }

  _source_columns_info:[string,string][]
  _target_columns_info:[string,string][]
  _source_locks:number[] = []
  _source_columns_number:number
  _target_columns_number:number
  _match_columns_info:[string,string][]

  run() {
    this._insert_config.source.cols = this._source_columns_info
    this._insert_config.target.cols = this._target_columns_info
    this._db.insertRun(this._insert_config).toPromise().then(p=>console.info(p))
  }
}