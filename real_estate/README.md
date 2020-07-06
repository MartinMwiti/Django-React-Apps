## Dependencies

1. `django-cors-headers` : allow frontend to communicate with backend
2. `djangorestframework`: for rest api
3. `djangorestframework-simplejwt`: package for doing web token
4. `Pillow`: for images upload
5. `psycopg2`: for communicating with my postgres database
6. `psycopg2-binary`: for communicating with my postgres database

---

### PostgreSQL SETUP

1. In the postgresql site, download **postgres installer** _If not already installed or if you wish to upgrade_
2. Add postgres to the **system evironement variable** i.e for version 12 add both

- `C:\Program Files\PostgreSQL\12\bin`
- `C:\Program Files\PostgreSQL\12\lib`

3. (TWO WAYS TO CREATE A DATABASE)

- (Option 1) In the **pgAdmin** create database with the name of your choosing. Have it have **Owner** set to **postgres**.
- (Option 2) In the cmd type psql -U userName `psql -U postgres` --> enter password --> ```CREATE DATABASE realest_estate Owner postgres;``` **NB: This will automatically add the database to the pgAdmin**

4. To operate the database in cmd run psql -U userName databaseName ```psql -U postgres real_estate```
