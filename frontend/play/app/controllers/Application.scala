package controllers

import play.api.mvc._

/**
  * Created by zhangxu on 2016/7/8.
  */
class Application extends Controller {
  def index = Action {
    Ok("It works!")
  }
}
