from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.
class User(AbstractUser):
    name = models.CharField(max_length=255)
    email = models.CharField(max_length=255, unique=True)
    password = models.CharField(max_length=255)
    username = None

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

class NFT_Details(models.Model):
    certificate_id = models.CharField(max_length=200,default=0)
    user_id = models.ForeignKey(User,on_delete=models.CASCADE, default=0)
    token_url = models.CharField(max_length=200,default='')
    expiry_date = models.DateTimeField(default='')
    token_id = models.IntegerField(unique=True,default=0)
    acc_address = models.CharField(max_length=300,default='')
    redeem = models.BooleanField(default=True)
    def str(self):
        return str(self.token_id)