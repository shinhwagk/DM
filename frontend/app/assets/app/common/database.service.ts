/**
 * Created by zhangxu on 2016/7/11.
 */
import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";

import {_conf_insert} from "../config/insert/insert.service";

@Injectable()
export class DatabaseService {
  constructor(private _http:Http) {
  }

  getColumnsBySQL(db:number, sql:string) {
    // return this._http.post(`/api/common/sqlcolumns/sql/${db}`).map((res:Response) => res.json())
  }

  getColumnsByTable(db:number, schema:string, table:string) {
    // return this._http.get(`/api/common/sqlcolumns/table/${db}/${schema}/${table}`).map((res:Response) => res.json())
  }

  getSourceColumnsByTaskId(_config:_conf_insert) {
    return this._http.post(`/api/task/source/${_config.id}/columns`, JSON.stringify(_config.source)).map((res:Response) => res.json())
  }

  getTargetColumnsByTaskId(_config:_conf_insert) {
    return this._http.post(`/api/task/target/${_config.id}/columns`, JSON.stringify(_config.target)).map((res:Response) => res.json())
  }

  setSourceOfTask(obj, num) {
    return this._http.post(`/api/task/source/${num}`, JSON.stringify(obj)).map((res:Response) => res.text())
  }

  setTargetOfTask(obj, num) {
    return this._http.post(`/api/task/target/${num}`, JSON.stringify(obj)).map((res:Response) => res.text())
  }

  insertRun(obj){
    return this._http.post(`/api/task/insert/run`, JSON.stringify(obj)).map((res:Response) => res.text())
  }

}