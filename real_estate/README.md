## Dependencies

1. `django-cors-headers` : allow frontend to communicate with backend
2. `djangorestframework`: for rest api
3. `djangorestframework-simplejwt`: package for doing web token
4. `Pillow`: for images upload
5. `psycopg2`: for communicating with my postgres database
6. `psycopg2-binary`: for communicating with my postgres database

---
## solving issues with login
1. ```python manage.py shell```
2. ```from django.contrib.auth import get_user_model``` //for custom user model else use ```from django.contrib.auth.models import User```
3. ```User = get_user_model()```
4. ```user = User.objects.get(email="admin@test.com")``` Check If it exist.
5. ```user.set_password('passwd123')```    
6. ```user.is_superuser = True```
7. ```user.is_staff = True```
8. ```user.save()```
9. ```exit()```
---

### PostgreSQL SETUP

1. In the postgresql site, download **postgres installer** _If not already installed or if you wish to upgrade_
2. Add postgres to the **system evironement variable** i.e for version 12 add both

- `C:\Program Files\PostgreSQL\12\bin`
- `C:\Program Files\PostgreSQL\12\lib`

3. (TWO WAYS TO CREATE A DATABASE)

- (Option 1) In the **pgAdmin** create database with the name of your choosing. Have it have **Owner** set to **postgres**.
- (Option 2) In the cmd type *psql -U userName* `psql -U postgres` --> enter password --> ```CREATE DATABASE realest_estate Owner postgres;``` **NB: This will automatically add the database to the pgAdmin**

4. To operate the database in cmd run *psql -U userName databaseName* ```psql -U postgres real_estate```

---
[Source: Models](https://testdriven.io/blog/django-custom-user-model/)

**AbstractUser vs AbstractBaseUser**
* The default User model in Django uses a username to uniquely identify a user during authentication. If you'd rather use an email address, you'll need to create a custom User model by either subclassing **AbstractUser** or **AbstractBaseUser**.

* Options:

1. **AbstractUser**: Use this option if you are happy with the existing fields on the User model and just want to remove the username field.
2. **AbstractBaseUser**: Use this option if you want to start from scratch by creating your own, completely new User model.

---

* [gitignore.io](https://www.toptal.com/developers/gitignore)
    + Add **Django**, **React**