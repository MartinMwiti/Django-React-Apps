from django.db import models
from datetime import datetime

class Realtor(models.Model):
    name = models.CharField(max_length=50)
    photo = models.ImageField(upload_to='photos/%Y/%m/%d/')
    description = models.TextField(blank=True)
    phone = models.CharField(max_length=20)
    email = models.EmailField(max_length=255)
    top_seller = models.BooleanField(default=False)
    data_hired = models.DateField(default=datetime.now, blank=True)

    def __str__(self):
        return self.name
    

