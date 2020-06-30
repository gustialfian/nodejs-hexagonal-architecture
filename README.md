# nodejs-simple-architecture

## TODO
1. [ ] setup rabbitmq
2. [ ] setup log
3. [ ] setup mongodb
4. [ ] interface pub sub
5. [ ] internal event
6. [ ] gracefull shutdown
7. [ ] design server API

## docker 
```bash
docker run --name db --rm \
  -e POSTGRES_PASSWORD=sandbox \
  -e POSTGRES_USER=sandbox \
  -e POSTGRES_DB=sandbox \
  -p 6543:5432 \
  postgres:13-alpine

docker run -it --rm \
    --name rabbitmq \
    -p 5672:5672 \
    -p 15672:15672 \
    rabbitmq:3-management
```