package models

import play.api.Play
import play.api.db.slick.DatabaseConfigProvider
import slick.driver.JdbcProfile
import slick.driver.MySQLDriver.api._

/**
  * Created by zhangxu on 2016/7/8.
  */
object Database {
  val dbConfig = DatabaseConfigProvider.get[JdbcProfile](Play.current)
  val db = dbConfig.db

  def test = {
    db.run(sql"select * from test".as[String].head)
  }
}
