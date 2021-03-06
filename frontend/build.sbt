name := "my-first-app"

version := "1.0.0-SNAPSHOT"

scalaVersion := "2.11.8"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

resolvers ++= Seq(
  "Spray Repository" at "http://dev.rtmsoft.me/nexus/content/groups/public/")

libraryDependencies ++= Seq(
  "com.typesafe.play" %% "play-slick" % "2.0.0",
  "mysql" % "mysql-connector-java" % "5.1.38",
  "com.oracle" % "ojdbc" % "6"
)