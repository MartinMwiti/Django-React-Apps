# Django-React-Apps

* Golden rule to use **generics** whenever I have to override the default methods to accomplish different specifications from list and details views.
	+ When your endpoint is very simple and you don't need to customize logic between list/create and retrieve/update/delete operations you can use **viewset**
	
	+ Marking extra actions for routing: use **viewset**
	
--- 
### Dump Data
**dumpdata for backup specific app**

    ./manage.py dumpdata appname > data.json

**Following command will dump the content in django auth.user table**

    ./manage.py dumpdata auth.user > user.json

**dumpdata (--exclude)**
+ You can use --exclude option to specify apps/tables which don't need being dumped.
+ Following command will dump the whole database with out including auth.permission table content.

        ./manage.py dumpdata --exclude auth.permission > db.json

**dumpdata (--indent)**
+ By default, dumpdata will output all data on a single line. It isn’t easy for humans to read
+ You can use the --indent option to pretty-print the output with a number of indentation spaces

        ./manage.py dumpdata auth.user --indent 2 > user.json

### loaddata command
**Restore data**

    ./manage.py loaddata data.json

* This command can be use to load the fixtures(database dumps) into database

        ./manage.py loaddata user.json
    + This command will add the user.json file content into the database

### Restore fresh database
+ When you backup whole database by using dumpdata command, it will backup all the database tables
+ If you use this database dump to load the fresh database(in another django project), it can be causes *IntegrityError* (If you ``loaddata`` in same database it works fine)
+ To fix this problem, make sure to backup the database by excluding ``contenttypes`` and ``auth.permissions`` tables

        ./manage.py dumpdata --exclude auth.permission --exclude contenttypes > db.json
		
		./manage.py dumpdata --exclude auth.permission --exclude contenttypes  --exclude admin.LogEntry --exclude sessions --indent 2 > db.json

    + Now you can use loaddata command with a fresh database

            ./manage.py loaddata db.json

* Source: [Data Dump & Restore](https://coderwall.com/p/mvsoyg/django-dumpdata-and-loaddata)
---
### Changing Port
**Run on a different port**
1. Port 8000 on IPv4 address of host localhost:

         django-admin runserver localhost:8000

2. Port 8000 on IPv6 address of host localhost:

        django-admin runserver -6 localhost:8000