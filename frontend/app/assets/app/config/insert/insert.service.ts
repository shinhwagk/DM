/**
 * Created by zhangxu on 2016/7/18.
 */

export interface _conf_source {
  mode:string;
  db:number;
  sql?:string;
  schema?:string;
  table?:string;
  cols?:[string,string][];
}

export interface _conf_target {
  db:number;
  schema:string;
  table:string;
  cols?:[string,string][];
}

export interface _conf_insert {
  id:number;
  source?:_conf_source;
  target?:_conf_target;
}