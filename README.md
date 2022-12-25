```
    Create a config.json file 
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

- once configuration is completed , execute the command `npx sequelize db:create`

```
