# nodejs-simple-architecture

## TODO
1. [ ] migrate to ts
2. [x] setup rabbitmq
3. [ ] setup log
4. [ ] setup mongodb
5. [x] interface pub sub
6. [ ] gracefull shutdown
7. [ ] design service API

## docker 
```bash
docker run --name db --rm \
  -e POSTGRES_PASSWORD=sandbox \
  -e POSTGRES_USER=sandbox \
  -e POSTGRES_DB=sandbox \
  -p 6543:5432 \
  postgres:13-alpine

docker run --name rabbitmq --rm \
    -e RABBITMQ_DEFAULT_USER=sandbox \
    -e RABBITMQ_DEFAULT_PASS=sandbox \
    -p 5672:5672 \
    -p 15672:15672 \
    rabbitmq:3.8-management-alpine
```