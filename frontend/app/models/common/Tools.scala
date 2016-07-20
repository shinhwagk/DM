package models.common

import java.sql.{DriverManager, ResultSet, ResultSetMetaData}

import play.api.libs.json.{JsValue, Json}

import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future

/**
  * Created by zhangxu on 2016/7/19.
  */
object Tools {
  def generateConnection(ip: String, port: Int, service: String) = {
    val url = s"jdbc:oracle:thin:@${ip}:${port}/$service";
    DriverManager.getConnection(url, "goku", "goku");
  }


  def stringToObject(str: String) = Json.parse(str)

  def objectToJson(o: JsValue) = Json.toJson(o).toString()

  def objectToJson(o: List[JsValue]) = Json.toJson(o).toString()

  def vectorToList[T](f: Future[Vector[T]]) = f.map(_.toList)

  def rowToJson[T](fr: Future[List[String]]) = fr.map(_.map(Json.parse(_))).map(objectToJson)

  def getColumnsNameAndType(conn: java.sql.Connection, sql: String) = {
    val stmt = conn.createStatement().executeQuery(sql)
    val meta = stmt.getMetaData
    val cols = for (i <- 1 to meta.getColumnCount) yield List(meta.getColumnName(i), meta.getColumnTypeName(i))
    Tools.objectToJson(Json.toJson(cols))
  }

  Class.forName("oracle.jdbc.driver.OracleDriver");

  def resultSetStream[T](rs: ResultSet): Stream[String] = {
    new Iterator[String] {
      override def hasNext: Boolean = rs.next()

      override def next(): String = rs.getString(1)
    }.toStream
  }
}
