```sql
create table task(
  data json,
  id int GENERATED ALWAYS AS (data -> '$.id') VIRTUAL unique not null
);
```
```json
{
  "id": 11,
  "type": "inc|once|batch update|merge|insert|delete",
  "statue": "等待被执行|执行中|执行完毕|执行错误",
  "source": {
    "db": {
      "type": "oracle",
      "name": "fun1",
      "user": "system"
    },
    "out": {
      "type": "sql | table",
      "info": {
        "schema": "fff",
        "table": "sxxx"
      }
    }
  },
  "target": {
    "db": {
      "type": "oracle",
      "name": "fun2",
      "user": "system"
    },
    "in": {
      "info": {
        "schema": "fff",
        "table": "sxxx"
      }
    }
  }
}
```
#### statue
```text
1 : task create unfinished
2 : task create finished
3 : task check
4 : runing
5 : exec success
0 : exec faile
```

#### test data
```sql
insert into tasks values(
  '{}'
)
```
