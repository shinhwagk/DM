package models

import play.api.Play
import play.api.db.slick.DatabaseConfigProvider
import play.api.libs.json._
import slick.driver.JdbcProfile
import slick.driver.MySQLDriver.api._
import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future

/**
  * Created by zhangxu on 2016/7/8.
  */
object Database {
  private val dbConfig = DatabaseConfigProvider.get[JdbcProfile](Play.current)
  private val db = dbConfig.db

  def stringToObject(str: String) = Json.parse(str)

  def objectToJson(o: JsValue) = Json.toJson(o).toString()

  def objectToJson(o: List[JsValue]) = Json.toJson(o).toString()

  def vectorToList[T](f: Future[Vector[T]]) = f.map(_.toList)

  def rowToJson[T](fr: Future[List[String]]) = fr.map(_.map(Json.parse(_))).map(objectToJson)

  def getExecutableTasks =
    db.run(sql"""select * from tasks where data -> '$$.statue' = '1'""".as[String])

  def getUnDeployTask(id: Int) =
    db.run(sql"""select * from tasks where data -> '$$.statue' = $id""".as[String].head)

  def getTasks =
    db.run(sql"select * from tasks".as[String])

  def addTask: Future[Int] =
    db.run(sqlu"""insert into tasks values('{"id":1}')""")

  def updateSourceOfTask(id: Int, json: JsValue) = {
    db.run(sqlu"update tasks set data where id = $id")
  }

  def updateTargetOfTask(id: Int, json: JsValue) =
    db.run(sqlu"update tasks set data where id = $id")


  /**
    * 可用类型:insert
    **/
  def getSourceColumnsOfTask(id: Int) = {

  }

  /**
    * 可用类型:insert
    **/
  def getTargetColumnsOfTask(id: Int) = {

  }

  //  def main(args: Array[String]) {
  //    val l: List[String] = List({"f":"c"}""","""{"x":"ss"}""")
  //    val l1: Future[List[String]] = Future.successful(l)
  //    //    l1.map(p=>p.map(Json.parse(_))).foreach(println)
  //    rowToJson(l1).foreach { p => println(p) }
  //    while (true) {
  //      Thread.sleep(10000)
  //    }
  //  }
}
