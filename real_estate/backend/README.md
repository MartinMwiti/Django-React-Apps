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

