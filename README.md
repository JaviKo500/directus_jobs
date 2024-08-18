# App test

1. Up db local run this command

```
docker compose up -d
```
2. Run bootstrap
```
 npx directus bootstrap
```
3. Run project
```
npm run start
```
4. Update snapshot
```
 npx directus schema snapshot ./snapshot.yaml
```
5. Apply snapshot
```
npx directus schema apply ./snapshot.yaml
```