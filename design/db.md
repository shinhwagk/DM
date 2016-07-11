### 表
```sql
create table database(
  data json,
  id text GENERATED ALWAYS AS (data -> '$.alias') VIRTUAL not null
);
```
### 例子
```json
{
  "alias": "fun",
  "type":"oracle",
  "ip": "aaa",
  "port": 111,
  "service": "ffff",
  "username": "fff",
  "password": "ccc"
}
```
```json
{
  "alias": 2,
  "type":"mysql",
  "ip": "aaa",
  "port": 111,
  "dbname": "ddd",
  "username": "fff",
  "password": "ccc"
}
```
