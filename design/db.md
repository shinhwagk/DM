
```sql
create table database(
  data json,
  id int GENERATED ALWAYS AS (data -> '$.id') VIRTUAL not null
)
```
```json
{
  "id": 1,
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
  "id": 2,
  "type":"mysql",
  "ip": "aaa",
  "port": 111,
  "dbname": "ddd",
  "username": "fff",
  "password": "ccc"
}
```
