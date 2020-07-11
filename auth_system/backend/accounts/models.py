from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager


class UserAccountManager(BaseUserManager): # overriding the base user manager
    def create_user(self, email, name, password=None):  # creating normal user (must match)
        if not email:
            raise ValueError('Users must have an email address')

        email = self.normalize_email(email) # e.g from 'Mart@gmail.com' to 'mart@gmail.com'
        user = self.model(email=email, name=name)

        user.set_password(password) # creates a hashed version of the password we have passed instead of the plain txt pass for security
        user.save()

        return user


    # def create_superuser(): # creating superuser (must match)
    #     pass


class UserAccount(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)
    name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name'] # if you have more fields, add here. email is required by default

    def get_full_name(self):
        return self.name

    def get_short_name(self):
        return self.name

    def __str__(self): # string representation of the object
        return self.email
    



