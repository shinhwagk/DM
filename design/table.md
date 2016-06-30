dm master
```sql
id int
load_type schema.table\sql query
inc_condition primary key/column name[number|date|timestemp]
target id
```

table user source configure 
``` json
{
  "id": 1,
  "db_id":1,
  "load_type" :"table|query",
  "load_type_info1" :{"schema":"type","table":"table"} ,
  "load_type_info2" :{"sql":""}
}
table user target configure
```json
{
  "id" :1,
  "db_id":1,
  "auto_create_table_from_source_ddl?":true,
  "schema","aaaa",
  "table","fff"
}

scheander id
```sql
id id

```
