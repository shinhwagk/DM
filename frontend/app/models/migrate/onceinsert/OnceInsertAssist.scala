package models.migrate.onceinsert

import models.common.Tools
import play.api.libs.json.{Json, Reads}

import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future

/**
  * Created by zhangxu on 2016/7/19.
  */
object OnceInsertAssist {

  case class SourceInsertSql(mode: String, db: String, sql: String)

  case class SourceInsertTable(mode: String, db: String, schema: String, table: String)

  case class SourceInsertTable2(mode: String, db: String, schema: String, table: String, cols: List[List[String]])

  case class TargetInsertTable(db: String, schema: String, table: String)

  case class TargetInsertTable2(db: String, schema: String, table: String, cols: List[List[String]])

  case class InsertObj(id: Int, source: SourceInsertTable2, target: TargetInsertTable2)

  implicit val A: Reads[SourceInsertSql] = Json.reads[SourceInsertSql]
  implicit val B: Reads[SourceInsertTable] = Json.reads[SourceInsertTable]
  implicit val B2: Reads[SourceInsertTable2] = Json.reads[SourceInsertTable2]
  implicit val C: Reads[TargetInsertTable] = Json.reads[TargetInsertTable]
  implicit val C2: Reads[TargetInsertTable2] = Json.reads[TargetInsertTable2]
  implicit val D: Reads[InsertObj] = Json.reads[InsertObj]

  /**
    * 可用类型:insert
    **/
  def getSourceColumnsOfTask(s: SourceInsertSql) = {
    val conn = Tools.generateConnection("10.65.193.22", 1521, "whdb2")
    Tools.getColumnsNameAndType(conn, s.sql)
  }

  def getSourceColumnsOfTask(s: SourceInsertTable): String = {
    val conn = Tools.generateConnection("10.65.193.22", 1521, "whdb2")
    val sql = s"select * from ${s.schema}.${s.table}"
    val data = Tools.getColumnsNameAndType(conn, sql)
    conn.close()
    data
  }

  def getTargetColumnsOfTask(s: TargetInsertTable): Future[String] = Future {
    val conn = Tools.generateConnection("10.65.193.22", 1521, "whdb2")
    val sql = s"select * from ${s.schema}.${s.table}"
    val data = Tools.getColumnsNameAndType(conn, sql)
    conn.close()
    data
  }

}
