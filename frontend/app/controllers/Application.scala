package controllers

import javax.inject.Inject

import akka.actor.{Actor, ActorRef, ActorSystem, Props}
import akka.stream.Materializer
import models.common.Tools
import models.migrate.onceinsert.OnceInsertAssist
import models.migrate.onceinsert.OnceInsertAssist.{InsertObj, SourceInsertSql, SourceInsertTable, TargetInsertTable}
import models.{Database => db}
import play.api.libs.json.Reads._
import play.api.libs.json._
import play.api.libs.streams.ActorFlow
import play.api.mvc._

import scala.concurrent.ExecutionContext.Implicits.global

/**
  * Created by zhangxu on 2016/7/8.
  */
class Application @Inject()(implicit system: ActorSystem, materializer: Materializer) extends Controller {
  def index = Action {
    Ok(views.html.index())
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

  def getSourceColumnsByTaskId(id: Int) = Action { request =>
    val jsValue: Option[JsValue] = request.body.asText.map(Json.parse)
    if ((jsValue.get \ "mode").as[String] == "sql") {
      Ok(OnceInsertAssist.getSourceColumnsOfTask(jsValue.get.as[SourceInsertSql]))
    } else {
      Ok(OnceInsertAssist.getSourceColumnsOfTask(jsValue.get.as[SourceInsertTable]))
    }
  }

  def getTargetColumnsByTaskId(id: Int) = Action.async { request =>
    val jsValue: Option[JsValue] = request.body.asText.map(Json.parse)
    OnceInsertAssist.getTargetColumnsOfTask(jsValue.get.as[TargetInsertTable]).map(Ok(_))
  }

  def createNewTask = Action.async {
    db.addTask.map(p => Ok("Adfd"))
  }

  def socket = WebSocket.accept[String, String] { request =>
    ActorFlow.actorRef(out => MyWebSocketActor.props(out))
  }


  def insertRun = Action { request =>
    val abc = request.body.asText.map(Json.parse).get.as[InsertObj]
    println(abc.target.cols)
    Ok("adf")
  }
}

object MyWebSocketActor {
  def props(out: ActorRef): Props = Props(new MyWebSocketActor(out))
}

class MyWebSocketActor(out: ActorRef) extends Actor {
  def receive = {
    case msg: String => out ! ("I received your message: " + msg)
  }
}