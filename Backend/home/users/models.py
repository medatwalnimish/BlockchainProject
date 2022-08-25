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

# class NFT_Details(models.Model):
#     certificate_id = models.CharField(max_length=200,default=0)
#     user_id = models.ForeignKey(User,on_delete=models.CASCADE, default=0)
#     created_at = models.DateTimeField(default='')
#     updated_at = models.DateTimeField(default=timezone.now)
#     token_url = models.CharField(max_length=200,default='')
#     expiry_date = models.DateTimeField(default='')
#     token_id = models.IntegerField(unique=True,default=0)
#     acc_address = models.CharField(max_length=300,default='')
#     redeem = models.BooleanField(default=True)
#     def str(self):
#         return str(self.token_id)


# def document_filepath(self, filename):
#     return 'document/' + str(self.pk) + '/docuemnt.pdf'


# class document(models.Model):
#     user_id = models.ForeignKey(User,on_delete=models.CASCADE, default=0)
#     created_at = models.DateTimeField(default='')
#     updated_at = models.DateTimeField(default=UTC().now)
#     name = models.CharField(max_length=255)
#     description = models.CharField(max_length=200,default='')
#     file_link = models.FileField(upload_to=document_filepath,null=True)

#     def doucument_filename(self):
#         return str(self.product_image)[str(self.product_image).index('product_images/' + str(self.pk) + "/"):]
#     def str(self):
#         return str(self.token_id)




# class Item(models.Model):
#     name = models.CharField(max_length=60, null=True)
#     price = models.FloatField()
#     description = models.CharField(max_length=200, null=True)
#     image = models.ImageField(max_length=255, upload_to=get_product_image_filepath, null=True, blank=True)

#     def get_product_image_filename(self):
#         return str(self.product_image)[str(self.product_image).index('product_images/' + str(self.pk) + "/"):]

#     def __str__(self):
#         return self.name