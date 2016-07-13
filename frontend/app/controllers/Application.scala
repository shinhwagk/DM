package controllers

import models.{Database => db}
import play.api.mvc._
import scala.concurrent.ExecutionContext.Implicits.global

/**
  * Created by zhangxu on 2016/7/8.
  */
class Application extends Controller {
  def index = Action {
    Ok("a")
  }

  def tasks = Action.async {
    db.getTasks.map(p => Ok(p.head))
  }

  def setSourceOfTask(id: Int) = Action { request =>
//    request.body.asJson.map(db.updateSourceOfTask(id, _))
    Ok("test")
  }

  def setTargetOfTask(id: Int) = Action {
    Ok("test")
  }

  def getSourceColumnsOfTask(id: Int) = Action {
    db.getSourceColumnsOfTask(id)
    Ok("test")
  }

  def getTargetColumnsOfTask(id: Int) = Action {
    db.getTargetColumnsOfTask(id)
    Ok("test")
  }

  def createNewTask = Action.async {
    db.addTask.map(p => Ok("Adfd"))
  }

}
