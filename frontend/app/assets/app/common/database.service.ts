/**
 * Created by zhangxu on 2016/7/11.
 */
import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";

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

  getSourceColumnsByTask(num) {
    return this._http.get(`/api/task/source/${num}/columns`).map((res:Response) => res.json())
  }

  getTargetColumnsByTask(num) {
    return this._http.get(`/api/task/target/${num}/columns`).map((res:Response) => res.json())
  }

  setSourceOfTask(obj, num) {
    return this._http.post(`/api/task/source/${num}`, JSON.stringify(obj)).map((res:Response) => res.text())
  }

  setTargetOfTask(obj, num) {
    return this._http.post(`/api/task/target/${num}`, JSON.stringify(obj)).map((res:Response) => res.text())
  }
}