from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager

# BaseUserManager, that uses an email as the unique identifier instead of a username.

class UserAccountManager(BaseUserManager):
    """
    Custom user model manager where email is the unique identifiers
    for authentication instead of usernames.
    """
    def create_user(self, email, name, password=None): #django auth doesn't allow password to be none if cresting acc
        """
        Create and save a User with the given email and password.
        """
        if not email:
            raise ValueError("The Email must be set")

        email = self.normalize_email(email)
        user = self.model(email=email, name=name)

        user.set_password(password)
            # user.save(using=self._db) # if you have more than one db for scaling
        user.save()

        return user

    def create_superuser(self, email, name, password):
        """
        Create and save a SuperUser with the given email and password.
        """
        user = self.create_user(email, password)

        user.is_superuser = True
        user.is_staff = True
        user.save()

        return user


# Custom User Model
 ## username does not exist for the AbstractBaseUser option
class UserAccount(AbstractBaseUser, PermissionsMixin):
    """
    Database model for the users
    """
    email = models.EmailField(max_length=255, unique=True)
    name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    
    # Specified that all objects for the class come from the UserAccountManager
    objects = UserAccountManager()

    # By default, Django uses username for authentication. To override that & set it to email
    # Set the USERNAME_FIELD -- which defines the unique identifier for the User model -- to email
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name'] # email is already required, no need to add

    def get_full_name(self):
        return self.name

    def get_short_name(self):
        return self.name

    def __str__(self):
        return self.email
    


    
