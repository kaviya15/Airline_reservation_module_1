```
- Create a config.json file 
                {
                  "development": {
                    "username": <YOUR_DB_LOGIN_NAME>,
                    "password": <YOUR_DB_PASSWORD>,
                    "database": "Flights_Search_DB_DEV",
                    "host": "127.0.0.1",
                    "dialect": "mysql"
                  },
                  "test": {
                    "username": "root",
                    "password": null,
                    "database": "database_test",
                    "host": "127.0.0.1",
                    "dialect": "mysql"
                  },
                  "production": {
                    "username": "root",
                    "password": null,
                    "database": "database_production",
                    "host": "127.0.0.1",
                    "dialect": "mysql"
                  }
            }

- once configuration is completed , cd to src folder execute the command `npx sequelize db:create to create a database`

- npx sequelize model:generate --name City --attributes name:String to create a table named City and columns name, here id is created automatically so was createdAt,updatedAt
- npx sequelize db:migrate  create the table in the database 
- npx sequelize db:migrate:undo  removing the table in the database 

### Tables
    city - id , name ,created_at,updated_at
    Airport - id,name,address,city_id , created_at,updated_at

- npx sequelize db:seed:all to add some starting values to the database ( For Dev )
```
